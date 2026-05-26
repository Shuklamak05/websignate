import fs from 'fs';
import { products } from '../src/data/products.js';

// Read products.json and strip potential UTF-8 BOM
const productsJson = JSON.parse(fs.readFileSync('./website_agent_handoff/products.json', 'utf8').replace(/^\uFEFF/, ''));

// Read the detected crop positions for brochure images
const cropMap = JSON.parse(fs.readFileSync('./scripts/crop_map.json', 'utf8'));

// Custom mapping override from products.json name to products.js name
const nameMap = {
  "SigLac": "Siglac Silage Inoculant",
  "SigPro Calf": "SigProe Calf",
  "Flavour Range": "Sigflav Feed Flavor Range",
  "SigProe": "SigProe Companion",
  "Lenire": "Lenire Pure Hemp Seed Oil",
  "SigCare": "Sigcare Gestation",
  "ChitoSil": "Chitosil Advanced Wound Healing Spray",
  "Regeneron": "Regeneron Oral Supplement"
};

// Normalize names for fuzzy comparison (remove spaces, case, non-alphanumeric)
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Clone existing products array to start enrichment
const newProducts = products.map(p => ({ ...p }));

function findProduct(jsonName) {
  const targetName = nameMap[jsonName] || jsonName;
  const targetNorm = normalize(targetName);
  return newProducts.find(p => normalize(p.name) === targetNorm);
}

// Loop through each collection and product in the handoff JSON
for (const collection of productsJson.collections) {
  const isCompanion = collection.name.includes("Companion");
  const category = isCompanion ? "companion" : "ruminant";
  
  for (const jsonProd of collection.products) {
    const existing = findProduct(jsonProd.name);
    
    // Prefix paths with / for Vite root-relative resolution
    const imgPath = jsonProd.image ? '/' + jsonProd.image : '';
    const srcPagePath = jsonProd.source_page ? '/' + jsonProd.source_page : '';
    const packSizes = jsonProd.pack_sizes || '';
    
    // Get the detected packaging side crop setting
    const imgName = jsonProd.image ? jsonProd.image.split('/').pop() : '';
    const packagingSide = cropMap[imgName] || 'center';
    
    if (existing) {
      existing.image = imgPath;
      existing.source_page = srcPagePath;
      existing.pack_sizes = packSizes;
      existing.packaging_side = packagingSide;
      console.log(`Enriched product: ${existing.name} (packaging side: ${packagingSide})`);
    } else {
      // Create a brand new product entry for missing items
      const id = jsonProd.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const newProd = {
        id: id,
        name: jsonProd.name,
        category: category,
        tagline: jsonProd.headline || jsonProd.category || '',
        description: jsonProd.headline || '',
        indications: jsonProd.key_benefits ? [...jsonProd.key_benefits] : ['Veterinary formulation'],
        ingredients: jsonProd.ingredients_summary ? [jsonProd.ingredients_summary] : ['See formulation details'],
        benefits: jsonProd.key_benefits ? jsonProd.key_benefits.map(b => `${b}.`) : [],
        dosage: jsonProd.directions || 'As directed by a veterinarian.',
        pack_sizes: packSizes,
        image: imgPath,
        source_page: srcPagePath,
        packaging_side: packagingSide,
        color: isCompanion ? '#2a9d8f' : '#457b9d', // Harmonious default colors
        icon: isCompanion ? 'Activity' : 'Leaf'
      };
      
      // Customize specific details for the two new items to match the premium marketing copy of others
      if (jsonProd.name === "Customized Formulations") {
        newProd.id = "customized-formulations";
        newProd.tagline = "Custom Product Development & Manufacturing";
        newProd.description = "Customized nutrition and feed additive formulations tailored to target species, production goals, and specific farm conditions. We support custom nutrition solutions, formula development, and large-scale manufacturing for animal health programmes.";
        newProd.indications = ["Customized Nutrition", "Formula Development", "Tailored Feed Solutions"];
        newProd.ingredients = [
          "Customized Vitamin & Mineral Premixes",
          "Tailored Enzymatic & Probiotic Blends",
          "Specific Rumen Buffers & Toxin Binders",
          "Targeted Species-Specific Additives"
        ];
        newProd.benefits = [
          "Fully customized nutrition solutions matching specific herd health requirements.",
          "Professional formula development and manufacturing support with strict quality control.",
          "Tailored precisely to target species, production goals, and local farm conditions."
        ];
        newProd.dosage = "Custom dosage guidelines are developed for each unique formulation based on species, body weight, and production goals. Consult our technical specialists.";
        newProd.color = "#457b9d";
        newProd.icon = "Settings";
      } else if (jsonProd.name === "PCR test for tick borne parasites") {
        newProd.id = "pcr-test-tick-borne-parasites";
        newProd.name = "PCR Test for Tick-Borne Parasites";
        newProd.tagline = "High-Sensitivity Molecular Diagnostic Panel";
        newProd.description = "A state-of-the-art molecular diagnostic panel providing high-sensitivity and high-specificity detection of key tick-borne pathogens. This PCR panel allows for early detection, precise accuracy, and continuous monitoring of treatment effectiveness in dogs and cats.";
        newProd.indications = ["Babesia Detection", "Ehrlichia Detection", "Hepatozoon Detection", "Anaplasma Detection", "Trypanosoma Detection", "Treatment Monitoring"];
        newProd.ingredients = [
          "Babesia spp. PCR Assay",
          "Ehrlichia spp. PCR Assay",
          "Hepatozoon spp. PCR Assay",
          "Anaplasma spp. PCR Assay",
          "Trypanosoma spp. PCR Assay",
          "Internal Positive Control Assay"
        ];
        newProd.benefits = [
          "Simultaneous screening for five major tick-borne parasite targets in a single diagnostic run.",
          "High clinical sensitivity and specificity for early detection before clinical signs manifest.",
          "Accurate molecular quantification to monitor treatment response and effectiveness over time."
        ];
        newProd.dosage = "Sample Requirements: 1-2 mL of whole blood in an EDTA tube. Submit to our diagnostic laboratory according to standard cold-chain shipping protocols.";
        newProd.color = "#2a9d8f";
        newProd.icon = "Activity";
      }
      
      newProducts.push(newProd);
      console.log(`Added brand new product: ${newProd.name}`);
    }
  }
}

// Write the updated products list back as an ES Module file
const outputContent = `export const products = ${JSON.stringify(newProducts, null, 2)};\n`;
fs.writeFileSync('./src/data/products.js', outputContent, 'utf8');

console.log(`\nSuccess! Enriched products dataset saved to './src/data/products.js'.`);
console.log(`Total products: ${newProducts.length} (Ruminant, Companion Animals, and Equine).`);
