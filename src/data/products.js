export const products = [
  // --- COMPANION ANIMALS ---
  {
    id: "collasig-bj-pro",
    name: "CollaSig BJ Pro",
    category: "companion",
    tagline: "Bioactive Collagen Peptides for Elite Joint Integrity",
    description: "A state-of-the-art joint supplement scientifically formulated with bioactive collagen peptides, high-purity glucosamine, chondroitin sulfate, and hyaluronic acid. It triggers cartilage regeneration, improves synovial fluid viscosity, and dramatically reduces pain in arthritic or senior companion animals.",
    indications: ["Osteoarthritis", "Hip Dysplasia", "Post-Orthopedic Surgery Recovery", "Stiffness & Limping", "Senior Mobility Decline"],
    ingredients: [
      "Bioactive Collagen Peptides (Type II) - 2500mg",
      "Glucosamine Hydrochloride - 800mg",
      "Chondroitin Sulfate - 400mg",
      "Hyaluronic Acid - 50mg",
      "Vitamin C (Ascorbic Acid) - 150mg",
      "Manganese Sulfate - 10mg"
    ],
    benefits: [
      "Stimulates chondrocytes to synthesize new collagen type II and proteoglycans.",
      "Improves joint lubrication, reducing friction and bone-on-bone grinding.",
      "Saves senior pets from persistent chronic pain and increases running drive."
    ],
    dosage: "1 tablet per 10kg body weight daily, or as advised by a veterinarian.",
    color: "#e28743", // Warm Sand/Orange
    icon: "Activity"
  },
  {
    id: "collasig-sh-pro",
    name: "CollaSig SH Pro",
    category: "companion",
    tagline: "Dermatological Marine Collagen & Coat Vitalizer",
    description: "An advanced dermatological formula containing organic marine collagen, chelated zinc, biotin, and micro-encapsulated Omega-3 & Omega-6 fatty acids. Specially crafted to address chronic skin irritation, reverse alopecia, and deliver a brilliant, glossy coat.",
    indications: ["Atopic Dermatitis", "Excessive Shedding", "Dull & Dry Coat", "Brittle Nails & Paw Inflammation", "Allergic Skin Flares"],
    ingredients: [
      "Marine Collagen Peptides - 1500mg",
      "Biotin (Vitamin H) - 10mg",
      "Zinc Glycinate (Organic Chelated Zinc) - 30mg",
      "Omega-3 Fatty Acids (EPA/DHA) - 300mg",
      "Vitamin E (Tocopherol) - 100 IU",
      "Selenium - 50mcg"
    ],
    benefits: [
      "Restores the skin epidermal barrier, reducing allergen penetration.",
      "Stimulates hair follicle growth and decreases dry shedding by 70%.",
      "Promotes deep hydration of dry, itchy, or cracked skin."
    ],
    dosage: "1 capsule per 15kg body weight daily. Mix with food.",
    color: "#e07a5f", // Rust
    icon: "Sparkles"
  },
  {
    id: "sigproe",
    name: "SigProe",
    category: "companion",
    tagline: "Micro-encapsulated Probiotic & Prebiotic Gut Harmonizer",
    description: "A heavy-duty veterinary synbiotic containing 5 billion CFUs of micro-encapsulated live probiotic strains paired with premium fructo-oligosaccharides (FOS). Specially designed to restore gut flora, improve nutrient absorption, and halt acute diarrhea.",
    indications: ["Post-Antibiotic Gut Dysbiosis", "Chronic Irritable Bowel (IBD)", "Acute Diarrhea & Loose Stools", "Poor Nutrient Absorption", "Flatulence & Smelly Stool"],
    ingredients: [
      "Lactobacillus acidophilus - 2.5 Billion CFU",
      "Bifidobacterium bifidum - 1.5 Billion CFU",
      "Saccharomyces boulardii - 1.0 Billion CFU",
      "Fructo-oligosaccharides (FOS) - 200mg",
      "Amylase & Lipase Digestive Enzymes - 100mg"
    ],
    benefits: [
      "Outcompetes pathogenic bacteria (E. coli, Salmonella) in the intestinal tract.",
      "Improves stool quality, consistency, and digest-efficiency.",
      "Synthesizes crucial B-vitamins and boosts systemic immune defense."
    ],
    dosage: "Cats/Small Dogs: 1/2 sachet daily. Medium/Large Dogs: 1 sachet daily.",
    color: "#3d5a80", // Slate Blue
    icon: "ShieldAlert"
  },
  {
    id: "sencare",
    name: "SenCare",
    category: "companion",
    tagline: "Geriatric Brain & Cellular Protection System",
    description: "A premium formulation designed for aging dogs and cats. Infused with Coenzyme Q10, Ginkgo Biloba, Resveratrol, and organic selenium to combat cognitive dysfunction syndrome (CDS), improve alertness, and support cardiovascular health.",
    indications: ["Cognitive Decline (CDS)", "Disorientation & Sleep Disturbances", "Lethargy & Low Energy", "Cardiac Aging & Weakness"],
    ingredients: [
      "Coenzyme Q10 - 30mg",
      "Ginkgo Biloba Extract - 80mg",
      "Resveratrol - 25mg",
      "L-Carnitine - 150mg",
      "Organic Selenium - 25mcg",
      "Omega-3 DHA - 100mg"
    ],
    benefits: [
      "Reduces cerebral oxidative damage, improving navigation and recognition.",
      "Supports cardiac muscle cell energy synthesis.",
      "Restores physical playfulness and cognitive alertness in pets over 8 years."
    ],
    dosage: "1 tablet daily for pets under 15kg; 2 tablets daily for larger pets.",
    color: "#81b29a", // Sage/Teal
    icon: "Heart"
  },
  {
    id: "chitosil",
    name: "ChitoSil",
    category: "companion",
    tagline: "Renal Function & Phosphate Binding Support",
    description: "An essential scientific blend of Chitosan and Calcium Carbonate designed for dogs and cats experiencing compromised renal function. It acts as an intestinal phosphate binder to minimize kidney workload and capture uremic toxins.",
    indications: ["Chronic Kidney Disease (CKD)", "Hyperphosphatemia", "Renal Insufficiency", "Uremic Load Management"],
    ingredients: [
      "Chitosan (High-density marine source) - 200mg",
      "Calcium Carbonate - 160mg",
      "Potassium Citrate - 80mg"
    ],
    benefits: [
      "Binds dietary phosphates in the intestine, preventing high systemic phosphorus.",
      "Reduces absorption of nitrogenous compounds and uremic toxins.",
      "Helps maintain optimal acid-base balance in cats and dogs with CKD."
    ],
    dosage: "1g powder per 5kg body weight twice daily, mixed directly with meals.",
    color: "#f4a261", // Ochre
    icon: "Flame"
  },

  // --- RUMINANTS (DAIRY CATTLE & CALVES) ---
  {
    id: "sigmin-vc",
    name: "SigMin VC",
    category: "ruminant",
    tagline: "High-Bioavailability Chelated Mineral & Vitamin Fortifier",
    description: "An elite, scientifically-balanced mineral mixture containing glycinate-chelated trace elements and vitamins. Designed specifically to enhance reproductive efficiency, increase conception rates, and boost overall feed utilization in dairy cattle.",
    indications: ["Mineral Deficiency", "Delayed Puberty & Silent Estrus", "Repeat Breeding Issues", "Low Birth Weights in Calves"],
    ingredients: [
      "Calcium - 22%",
      "Phosphorus - 12%",
      "Chelated Zinc Glycinate - 9600mg/kg",
      "Chelated Copper Glycinate - 4500mg/kg",
      "Chelated Manganese - 4000mg/kg",
      "Cobalt - 150mg/kg",
      "Vitamin A - 700,000 IU/kg",
      "Vitamin D3 - 70,000 IU/kg",
      "Vitamin E - 250mg/kg"
    ],
    benefits: [
      "Chelated glycinate technology prevents mineral lock-up in the rumen.",
      "Accelerates ovarian activity and regulates the estrus cycle.",
      "Drastically reduces calving intervals and boosts early embryo survival."
    ],
    dosage: "Cows & Buffaloes: 50g-80g daily. Calves & Sheep: 20g-30g daily.",
    color: "#2a9d8f", // Green-Teal
    icon: "GitBranch"
  },
  {
    id: "sigmin-premium",
    name: "SigMin Premium",
    category: "ruminant",
    tagline: "Advanced Somatotropin & Lactation Performance Maximizer",
    description: "A heavy-duty veterinary formulation designed for high-yielding dairy animals during peak lactation. Loaded with rumen-protected amino acids, live yeast cultures, and chelated calcium to maximize daily milk yield and raise SNF (Solid Not Fat) fat percentages.",
    indications: ["Low Milk Output", "Declining Fat/SNF Ratios", "Post-Calving Energy Deficit", "Rumen Acidosis Risks"],
    ingredients: [
      "Rumen Bypass Fat - 20%",
      "Rumen Protected Methionine - 3%",
      "Rumen Protected Lysine - 1.5%",
      "Saccharomyces cerevisiae (Live Yeast) - 2x10^10 CFU",
      "Bio-available Calcium & Phosphorus - 10%"
    ],
    benefits: [
      "Provides high-density, bypass lipids for milk fat synthesis.",
      "Stabilizes ruminal pH, avoiding acidosis during heavy grain feeding.",
      "Increases average daily milk yield by 1.5 to 3 liters per cow."
    ],
    dosage: "100g daily per animal, thoroughly mixed into the morning concentrate feed.",
    color: "#264653", // Deep Blue Green
    icon: "TrendingUp"
  },
  {
    id: "sigmin-mst",
    name: "SigMin MST",
    category: "ruminant",
    tagline: "Somatic Cell Regulator & Mastitis Defense Formula",
    description: "A targeted scientific solution packed with organic trace minerals, high-dose biotin, and potent antioxidants to fortify the teat canal lining, reduce somatic cell count (SCC), and build a robust immunological defense against clinical mastitis.",
    indications: ["Subclinical Mastitis", "High Somatic Cell Counts (SCC)", "Damaged Teat Skin & Keratin Plug Deficiencies", "Watery or Flaky Milk"],
    ingredients: [
      "Biotin - 200mg/kg",
      "Zinc Methionine Complex - 15,000mg/kg",
      "Copper Glycinate - 5,000mg/kg",
      "Vitamin E - 10,000 IU/kg",
      "Selenium Yeast - 100mg/kg"
    ],
    benefits: [
      "Promotes quick keratinization of the teat canal, locking out bacteria.",
      "Lowers milk somatic cell count, ensuring top dairy pricing premiums.",
      "Accelerates recovery alongside antibiotic treatments during mastitis."
    ],
    dosage: "50g per day per cow for 15-20 days, or as directed by a vet.",
    color: "#e76f51", // Salmon Rust
    icon: "Shield"
  },
  {
    id: "molasig",
    name: "MolaSig",
    category: "ruminant",
    tagline: "Nutrient-Dense Molasses Lick Block with Rumen Activators",
    description: "An innovative, weatherproof lick block that blends premium dehydrated sugarcane molasses with urea, chelated micro-minerals, and sulfur. It provides regular micro-dosing of energy to fuel rumen microflora, improving dry matter digestibility.",
    indications: ["Poor Quality Dry Roughage Digestion", "Weight Loss in Grazing Cattle", "Slow Calving Rates"],
    ingredients: [
      "Sugarcane Molasses - 40%",
      "Urea (Slow Release NPN) - 8%",
      "Calcium Carbonate - 10%",
      "Sulfur - 1.5%",
      "Chelated Trace Minerals - 2.5%"
    ],
    benefits: [
      "Fuels rumen microbes to break down straw, stubble, and poor hay 40% faster.",
      "Constant licking ensures safe, slow nitrogen release with zero toxicity.",
      "Maintains animal body weight and energy balance during winter/dry spells."
    ],
    dosage: "Keep blocks accessible in pastures. Recommended intake: 150g-250g daily.",
    color: "#6b705c", // Olive Drab
    icon: "Box"
  },

  // --- EQUINE (PERFORMANCE & RACE HORSES) ---
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
    color: "#b5828f", // Dusty Rose
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
    color: "#a2d2ff", // Soft Blue
    icon: "ShieldAlert"
  }
];
