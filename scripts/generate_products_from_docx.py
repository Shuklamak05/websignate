#!/usr/bin/env python3
"""Generate src/data/products.js from Signate master-data .docx files.

No third-party deps: .docx is a zip containing word/document.xml.
We extract paragraph text lines, split into product sections, and map them
into the shape expected by the React UI.

Usage:
  python3 scripts/generate_products_from_docx.py
"""

from __future__ import annotations

import re
import zipfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATTLE_DOCX = ROOT / "Signate_Cattle_Brochure_Master_Data.docx"
COMPANION_DOCX = ROOT / "Signate_Companion_Animals_Master_Data.docx"
OUT_JS = ROOT / "src" / "data" / "products.js"

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}

HEADING_RE = re.compile(r"^(\d+)\.\s+(.+?)\s+-\s+SPECIFICATION SPEC SHEET\s*$", re.I)

TRIM_TRADEMARK = str.maketrans({
    "®": "",
    "™": "",
})


@dataclass
class Product:
    id: str
    name: str
    category: str
    tagline: str
    description: str
    indications: list[str]
    ingredients: list[str]
    benefits: list[str]
    dosage: str
    color: str
    icon: str


def _docx_lines(path: Path) -> list[str]:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)

    lines: list[str] = []
    for p in root.findall(".//w:p", NS):
        texts = [t.text for t in p.findall(".//w:t", NS) if t.text]
        if not texts:
            continue
        line = "".join(texts).strip()
        if line:
            # Normalize whitespace a bit.
            line = re.sub(r"\s+", " ", line)
            lines.append(line)
    return lines


def _slugify(s: str) -> str:
    s = s.translate(TRIM_TRADEMARK)
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s or "product"


_ALLCAPS_KEEP = {
    "VC",
    "BIO",
    "ULTRA",
    "PLUS",
    "MAX",
    "PRO",
    "RP",
    "DS",
    "CL",
    "FR",
    "CALF",
    "BJ",
    "SH",
}


def _pretty_name(raw: str) -> str:
    raw = raw.translate(TRIM_TRADEMARK).strip()
    # If the heading is all-caps, convert to a nicer display name while
    # preserving common abbreviations.
    if raw.isupper():
        words = []
        for w in raw.split():
            if w in {"&"}:
                words.append(w)
                continue
            if w in _ALLCAPS_KEEP:
                # Prefer "Pro" over "PRO" for nicer reading.
                words.append("Pro" if w == "PRO" else w)
                continue
            # Title-case, but keep internal brand-style camelcase if present later.
            words.append(w.capitalize())
        return " ".join(words)
    return raw


def _split_bullets(lines: list[str]) -> list[str]:
    out: list[str] = []
    for l in lines:
        l = l.strip()
        if l.startswith("•"):
            l = l.lstrip("•").strip()
        if l:
            out.append(l)
    return out


def _split_ingredients(s: str) -> list[str]:
    s = s.strip().strip(".")
    # Many entries are comma-separated, but some fields contain numeric lists
    # like "Omega 3, 6, 9 ..." which we want to keep together.
    raw_parts = [p.strip() for p in s.split(",")]
    parts: list[str] = []

    for p in raw_parts:
        if not p:
            continue

        # Merge digit fragments caused by splitting numeric lists:
        # "Omega 3, 6, and 9 ..." should become one ingredient entry.
        if parts and re.search(r"\bomega\b", parts[-1], re.I) and re.match(r"^(?:and\s+)?[0-9]+\b", p, re.I):
            p2 = re.sub(r"^and\s+", "", p, flags=re.I).strip()
            parts[-1] = parts[-1] + ", " + p2
            continue

        # Merge standalone numeric parts like "6" or "10%" back into the previous item.
        if parts and re.fullmatch(r"[0-9]+(?:\.[0-9]+)?%?", p):
            parts[-1] = parts[-1] + ", " + p
            continue

        parts.append(p)

    # Keep reasonably sized chunks; if the doc had long phrases, keep as-is.
    return parts[:18] if len(parts) > 18 else parts


def parse_products(docx_path: Path, category: str, palette: list[str], icon_cycle: list[str]) -> list[Product]:
    lines = _docx_lines(docx_path)

    # Locate section boundaries.
    headings: list[tuple[int, int, str]] = []
    for idx, line in enumerate(lines):
        m = HEADING_RE.match(line)
        if not m:
            continue
        headings.append((idx, int(m.group(1)), m.group(2)))

    products: list[Product] = []

    for h_i, (start_idx, num, raw_title) in enumerate(headings):
        end_idx = headings[h_i + 1][0] if h_i + 1 < len(headings) else len(lines)
        block = lines[start_idx:end_idx]

        name = _pretty_name(raw_title)

        tagline = ""
        description = ""
        dosage = ""
        indications: list[str] = []
        benefits: list[str] = []
        ingredients: list[str] = []

        def find_field(prefix: str) -> str | None:
            for l in block:
                if l.startswith(prefix):
                    return l[len(prefix):].strip()
            return None

        tagline = find_field("Website Product Tagline:") or ""
        description = find_field("Long Form Product Description:") or ""
        dosage = find_field("Directions for Use / Dosage:") or ""
        ing_raw = find_field("Active Technical Ingredients:") or ""
        if ing_raw:
            ingredients = _split_ingredients(ing_raw)

        # Bullet sections
        def collect_bullets(after_header: str) -> list[str]:
            try:
                start = block.index(after_header) + 1
            except ValueError:
                return []
            collected: list[str] = []
            for l in block[start:]:
                if HEADING_RE.match(l):
                    break
                # stop when we hit another header-ish field
                if re.match(r"^[A-Za-z].+?:\s*", l) and not l.startswith("•"):
                    break
                if l.startswith("•"):
                    collected.append(l)
            return _split_bullets(collected)

        indications = collect_bullets("Recommended UI Modal Badges (Indications):")
        benefits = collect_bullets("Key Benefits (Marketing Bullets):")

        pid = _slugify(name)

        color = palette[(len(products)) % len(palette)]
        icon = icon_cycle[(len(products)) % len(icon_cycle)]

        products.append(
            Product(
                id=pid,
                name=name,
                category=category,
                tagline=tagline,
                description=description,
                indications=indications or ["Veterinary formulation"],
                ingredients=ingredients or ["See formulation details"],
                benefits=benefits,
                dosage=dosage or "As directed by a veterinarian.",
                color=color,
                icon=icon,
            )
        )

    return products


def _js_str(s: str) -> str:
    # Minimal JS string escaper for double-quoted literals.
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    return s


def write_products_js(out_path: Path, products: list[Product], equine_js: str) -> None:
    lines: list[str] = []
    lines.append("export const products = [")

    def emit_product(p: Product):
        lines.append("  {")
        lines.append(f'    id: "{_js_str(p.id)}",')
        lines.append(f'    name: "{_js_str(p.name)}",')
        lines.append(f'    category: "{_js_str(p.category)}",')
        lines.append(f'    tagline: "{_js_str(p.tagline)}",')
        lines.append(f'    description: "{_js_str(p.description)}",')
        inds = ", ".join([f'"{_js_str(x)}"' for x in p.indications])
        lines.append(f"    indications: [{inds}],")
        lines.append("    ingredients: [")
        for ing in p.ingredients:
            lines.append(f'      "{_js_str(ing)}",')
        lines.append("    ],")
        lines.append("    benefits: [")
        for b in p.benefits:
            lines.append(f'      "{_js_str(b)}",')
        lines.append("    ],")
        lines.append(f'    dosage: "{_js_str(p.dosage)}",')
        lines.append(f'    color: "{_js_str(p.color)}",')
        lines.append(f'    icon: "{_js_str(p.icon)}"')
        lines.append("  },")

    companion = [p for p in products if p.category == "companion"]
    ruminant = [p for p in products if p.category == "ruminant"]

    lines.append("  // --- COMPANION ANIMALS ---")
    for p in companion:
        emit_product(p)

    lines.append("")
    lines.append("  // --- RUMINANTS (DAIRY CATTLE & CALVES) ---")
    for p in ruminant:
        emit_product(p)

    lines.append("")
    lines.append("  // --- EQUINE (PERFORMANCE & RACE HORSES) ---")
    # Insert existing equine objects (already valid JS object literals).
    for l in equine_js.strip().splitlines():
        lines.append("  " + l.rstrip())

    # Replace trailing comma before closing if present in equine_js.
    # (We keep trailing commas inside array; JS allows it.)
    lines.append("];\n")

    out_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    if not CATTLE_DOCX.exists() or not COMPANION_DOCX.exists():
        raise SystemExit("Missing .docx inputs")

    companion_palette = [
        "#e07a5f",
        "#3d5a80",
        "#81b29a",
        "#f4a261",
        "#2a9d8f",
    ]
    ruminant_palette = [
        "#2a9d8f",
        "#264653",
        "#6b705c",
        "#e76f51",
        "#457b9d",
    ]
    icons = ["Activity", "Sparkles", "Shield", "TrendingUp", "Leaf", "Box", "Droplets"]

    companion = parse_products(COMPANION_DOCX, "companion", companion_palette, icons)
    ruminant = parse_products(CATTLE_DOCX, "ruminant", ruminant_palette, icons)

    # Equine products are currently maintained manually (no source docx provided).
    equine_js = """
{
  id: "sigmin-vc-eq",
  name: "SigMin VC (EQ)",
  category: "equine",
  tagline: "Equine Skeletal & Myofibril Mineral Fortifier",
  description: "A premium horse formulation specialized for skeletal development, myofibrillar repair, and energetic stamina. Loaded with organic minerals, highly digestible bone-matrix stimulants, and amino acids to support active training and prevent career-ending shin splints.",
  indications: ["Race Horse Heavy Training", "Growing Yearlings Bone Development", "Poor Muscle Tone & Fatigue", "Post-Competition Muscle Soreness"],
  ingredients: [
    "Calcium Phosphate - 15g",
    "L-Lysine Hydrochloride - 10g",
    "DL-Methionine - 5g",
    "Organic Chelated Copper - 150mg",
    "Chelated Zinc - 400mg",
    "Vitamin A - 50,000 IU",
    "Vitamin E - 1,500mg"
  ],
  benefits: [
    "Maximizes bone density, safeguarding yearlings from training fractures.",
    "Accelerates repair of microscopic muscle tears after hard gallops.",
    "Enhances glossy coat, athletic silhouette, and overall physical endurance."
  ],
  dosage: "Race Horses: 100g daily. Yearlings & Ponies: 50g daily.",
  color: "#b5828f",
  icon: "Zap"
},
{
  id: "collasig-bj-eq",
  name: "CollaSig BJ (EQ)",
  category: "equine",
  tagline: "Bioactive Tendon & Cartilage Structural Matrix",
  description: "A high-potency, pharmaceutical-grade equine joint formulation designed to withstand extreme track impact. Combining bioactive type II hydrolyzed collagen, MSM, high-molecular hyaluronic acid, and glucosamine, it keeps tendons flexible and hocks lubricated.",
  indications: ["Hock & Stifle Joint Inflammation", "Tendon & Ligament Strains", "Synovitis (Windgalls)", "Stiff Stride & Reduced Jump Power"],
  ingredients: [
    "Hydrolyzed Collagen Type II - 10,000mg",
    "Methylsulfonylmethane (MSM) - 8,000mg",
    "Glucosamine Sulfate - 12,000mg",
    "Chondroitin Sulfate - 4,500mg",
    "Hyaluronic Acid (High MW) - 300mg"
  ],
  benefits: [
    "Repairs cellular micro-tears in flexor tendons and suspensory ligaments.",
    "Reduces hock inflammation and joint heat within 7 days of treatment.",
    "Restores stride length, leg extensions, and massive jumping confidence."
  ],
  dosage: "Loading Dose (7 days): 50g daily. Maintenance: 25g daily.",
  color: "#a2d2ff",
  icon: "ShieldAlert"
}
""".strip()

    all_products = companion + ruminant

    write_products_js(OUT_JS, all_products, equine_js)

    print(f"Wrote {OUT_JS}")
    print(f"Companion products: {len(companion)}")
    print(f"Dairy cattle products: {len(ruminant)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
