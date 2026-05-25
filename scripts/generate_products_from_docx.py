#!/usr/bin/env python3
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path('/Users/mac/Desktop/MAYANK/WEbsite')
CATTLE_DOCX = Path('/Users/mac/Downloads/Signate_Cattle_Brochure_Master_Data.docx')
COMP_DOCX = Path('/Users/mac/Downloads/Signate_Companion_Animals_Master_Data.docx')
OUT = ROOT / 'src/data/products.js'

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
HEADING_RE = re.compile(r'^(\d+)\.\s+(.+?)\s+-\s+SPECIFICATION SPEC SHEET\s*$', re.I)
TR = str.maketrans({'®': '', '™': ''})


def lines_from_docx(path: Path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml')
    root = ET.fromstring(xml)
    lines = []
    for p in root.findall('.//w:p', NS):
        texts = [t.text for t in p.findall('.//w:t', NS) if t.text]
        if texts:
            s = re.sub(r'\s+', ' ', ''.join(texts)).strip()
            if s:
                lines.append(s)
    return lines


def slugify(s: str):
    s = s.translate(TR).lower()
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s or 'product'


def split_ingredients(s: str):
    parts = [p.strip().strip('.') for p in s.split(',') if p.strip()]
    out = []
    for p in parts:
        if out and re.search(r'\bomega\b', out[-1], re.I) and re.match(r'^(?:and\s+)?[0-9]+\b', p, re.I):
            out[-1] += ', ' + re.sub(r'^and\s+', '', p, flags=re.I)
        elif out and re.fullmatch(r'[0-9]+(?:\.[0-9]+)?%?', p):
            out[-1] += ', ' + p
        else:
            out.append(p)
    return out[:18] if len(out) > 18 else out


def parse_products(path: Path, category: str, colors, icons):
    ls = lines_from_docx(path)
    heads = [(i, int(m.group(1)), m.group(2)) for i, l in enumerate(ls) if (m := HEADING_RE.match(l))]
    items = []

    for h, (_, _, raw_title) in enumerate(heads):
        idx = heads[h][0]
        end = heads[h + 1][0] if h + 1 < len(heads) else len(ls)
        block = ls[idx:end]

        def field(prefix):
            for line in block:
                if line.startswith(prefix):
                    return line[len(prefix):].strip()
            return ''

        def bullets(header):
            if header not in block:
                return []
            i = block.index(header) + 1
            out = []
            for line in block[i:]:
                if HEADING_RE.match(line):
                    break
                if re.match(r'^[A-Za-z].+?:\s*', line) and not line.startswith('•'):
                    break
                if line.startswith('•'):
                    out.append(line.lstrip('•').strip())
            return out

        name = raw_title.translate(TR).title().replace(' Pro', ' PRO').replace('Sigmin', 'SigMin').replace('Sigproe', 'SigProe').replace('Collasig', 'CollaSig')
        tagline = field('Website Product Tagline:')
        desc = field('Long Form Product Description:')
        dosage = field('Directions for Use / Dosage:') or 'As directed by a veterinarian.'
        ingr = split_ingredients(field('Active Technical Ingredients:')) or ['See formulation details']
        indications = bullets('Recommended UI Modal Badges (Indications):') or ['Veterinary formulation']
        benefits = bullets('Key Benefits (Marketing Bullets):')

        i = len(items)
        items.append({
            'id': slugify(name),
            'name': name,
            'category': category,
            'tagline': tagline,
            'description': desc,
            'indications': indications,
            'ingredients': ingr,
            'benefits': benefits,
            'dosage': dosage,
            'color': colors[i % len(colors)],
            'icon': icons[i % len(icons)]
        })

    return items


def js_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')


comp = parse_products(COMP_DOCX, 'companion', ['#e07a5f', '#3d5a80', '#81b29a', '#f4a261', '#2a9d8f'], ['Activity', 'Sparkles', 'Shield', 'TrendingUp', 'Leaf', 'Box'])
rum = parse_products(CATTLE_DOCX, 'ruminant', ['#2a9d8f', '#264653', '#6b705c', '#e76f51', '#457b9d'], ['Activity', 'Sparkles', 'Shield', 'TrendingUp', 'Leaf', 'Box'])

equine = [
    {
        'id': 'sigmin-vc-eq',
        'name': 'SigMin VC (EQ)',
        'category': 'equine',
        'tagline': 'Equine Skeletal & Myofibril Mineral Fortifier',
        'description': 'A premium horse formulation specialized for skeletal development, myofibrillar repair, and energetic stamina. Loaded with organic minerals, highly digestible bone-matrix stimulants, and amino acids to support active training and prevent career-ending shin splints.',
        'indications': ['Race Horse Heavy Training', 'Growing Yearlings Bone Development', 'Poor Muscle Tone & Fatigue', 'Post-Competition Muscle Soreness'],
        'ingredients': ['Calcium Phosphate - 15g', 'L-Lysine Hydrochloride - 10g', 'DL-Methionine - 5g', 'Organic Chelated Copper - 150mg', 'Chelated Zinc - 400mg', 'Vitamin A - 50,000 IU', 'Vitamin E - 1,500mg'],
        'benefits': ['Maximizes bone density, safeguarding yearlings from training fractures.', 'Accelerates repair of microscopic muscle tears after hard gallops.', 'Enhances glossy coat, athletic silhouette, and overall physical endurance.'],
        'dosage': 'Race Horses: 100g daily. Yearlings & Ponies: 50g daily.',
        'color': '#b5828f',
        'icon': 'Zap'
    },
    {
        'id': 'collasig-bj-eq',
        'name': 'CollaSig BJ (EQ)',
        'category': 'equine',
        'tagline': 'Bioactive Tendon & Cartilage Structural Matrix',
        'description': 'A high-potency, pharmaceutical-grade equine joint formulation designed to withstand extreme track impact. Combining bioactive type II hydrolyzed collagen, MSM, high-molecular hyaluronic acid, and glucosamine, it keeps tendons flexible and hocks lubricated.',
        'indications': ['Hock & Stifle Joint Inflammation', 'Tendon & Ligament Strains', 'Synovitis (Windgalls)', 'Stiff Stride & Reduced Jump Power'],
        'ingredients': ['Hydrolyzed Collagen Type II - 10,000mg', 'Methylsulfonylmethane (MSM) - 8,000mg', 'Glucosamine Sulfate - 12,000mg', 'Chondroitin Sulfate - 4,500mg', 'Hyaluronic Acid (High MW) - 300mg'],
        'benefits': ['Repairs cellular micro-tears in flexor tendons and suspensory ligaments.', 'Reduces hock inflammation and joint heat within 7 days of treatment.', 'Restores stride length, leg extensions, and massive jumping confidence.'],
        'dosage': 'Loading Dose (7 days): 50g daily. Maintenance: 25g daily.',
        'color': '#a2d2ff',
        'icon': 'ShieldAlert'
    }
]

all_items = comp + rum + equine

buf = ['export const products = [']
for p in all_items:
    buf.append('  {')
    buf.append(f'    id: "{js_escape(p["id"])}",')
    buf.append(f'    name: "{js_escape(p["name"])}",')
    buf.append(f'    category: "{js_escape(p["category"])}",')
    buf.append(f'    tagline: "{js_escape(p["tagline"])}",')
    buf.append(f'    description: "{js_escape(p["description"])}",')
    inds = ', '.join([f'"{js_escape(x)}"' for x in p['indications']])
    buf.append(f'    indications: [{inds}],')
    buf.append('    ingredients: [')
    for ing in p['ingredients']:
        buf.append(f'      "{js_escape(ing)}",')
    buf.append('    ],')
    buf.append('    benefits: [')
    for b in p['benefits']:
        buf.append(f'      "{js_escape(b)}",')
    buf.append('    ],')
    buf.append(f'    dosage: "{js_escape(p["dosage"])}",')
    buf.append(f'    color: "{p["color"]}",')
    buf.append(f'    icon: "{p["icon"]}"')
    buf.append('  },')
buf.append('];')

OUT.write_text('\n'.join(buf), encoding='utf-8')
print(f'Wrote {OUT} with {len(comp)} companion, {len(rum)} ruminant, {len(equine)} equine products.')
