import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Scale, Heart, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function ScientificConsultant({ onProductSelect }) {
  const [animalType, setAnimalType] = useState('dog');
  const [weight, setWeight] = useState(15);
  const [clinicalFocus, setClinicalFocus] = useState('joints');

  // Dynamic configuration list based on animalType
  const focusOptions = useMemo(() => {
    switch (animalType) {
      case 'dog':
      case 'cat':
        return [
          { id: 'joints', label: 'Cartilage & Joint Mobility' },
          { id: 'skin', label: 'Dermal Shedding & Coat Gloss' },
          { id: 'gut', label: 'Prebiotic Synbiotic Gut Vitality' },
          { id: 'senior', label: 'Geriatric Alertness & Cell Vitality' }
        ];
      case 'cow':
        return [
          { id: 'minerals', label: 'Reproduction & Fertile Estrus' },
          { id: 'lactation', label: 'Peak Lactation Yield & Fat SNF' },
          { id: 'mastitis', label: 'Teat Canal & Somatic Defense' }
        ];
      case 'horse':
        return [
          { id: 'skeletal', label: 'Bone Density & Stamina' },
          { id: 'joints-eq', label: 'Flexor Tendon & Hock Elasticity' }
        ];
      default:
        return [];
    }
  }, [animalType]);

  // Handle resetting focus when animal changes
  React.useEffect(() => {
    if (animalType === 'dog' || animalType === 'cat') {
      setClinicalFocus('joints');
      setWeight(animalType === 'dog' ? 20 : 4);
    } else if (animalType === 'cow') {
      setClinicalFocus('minerals');
      setWeight(450);
    } else if (animalType === 'horse') {
      setClinicalFocus('skeletal');
      setWeight(500);
    }
  }, [animalType]);

  // Compute recommendation results
  const recommendation = useMemo(() => {
    let productId = '';
    let calculationText = '';
    let scientificAction = '';

    if (animalType === 'dog' || animalType === 'cat') {
      const wVal = parseFloat(weight);
      if (clinicalFocus === 'joints') {
        productId = 'collasig-bj-pro';
        const dosageVal = (wVal / 10).toFixed(1);
        calculationText = `${dosageVal} tablet(s) of CollaSig BJ Pro daily.`;
        scientificAction = 'Stimulates collagen type II pathways to rebuild high-impact cartilage.';
      } else if (clinicalFocus === 'skin') {
        productId = 'collasig-sh-pro';
        const dosageVal = Math.max(1, Math.round(wVal / 15));
        calculationText = `${dosageVal} capsule(s) of CollaSig SH Pro daily.`;
        scientificAction = 'Restores the epidermal hydration barrier and reduces hair follicle fall.';
      } else if (clinicalFocus === 'gut') {
        productId = 'sigproe';
        const dosageVal = wVal < 10 ? '1/2 sachet' : '1 sachet';
        calculationText = `${dosageVal} of SigProe daily, mixed in food.`;
        scientificAction = 'Introduces 5 Billion CFU synbiotics to crowd out bowel pathobionts.';
      } else if (clinicalFocus === 'senior') {
        productId = 'sencare';
        const dosageVal = wVal < 15 ? '1 tablet' : '2 tablets';
        calculationText = `${dosageVal} of SenCare daily.`;
        scientificAction = 'Combats lipid peroxidation and supplies CoQ10 for cardiovascular endurance.';
      }
    } else if (animalType === 'cow') {
      if (clinicalFocus === 'minerals') {
        productId = 'sigmin-vc';
        calculationText = '60 grams of SigMin VC daily.';
        scientificAction = 'Glycinate chelation ensures zero calcium locking inside the rumen environment.';
      } else if (clinicalFocus === 'lactation') {
        productId = 'sigmin-premium';
        calculationText = '100 grams of SigMin Premium mixed daily with morning feeds.';
        scientificAction = 'Delivers bypass amino acids directly to the abomasum to increase milk SNF fat.';
      } else if (clinicalFocus === 'mastitis') {
        productId = 'sigmin-mst';
        calculationText = '50 grams of SigMin MST daily for 15-20 days.';
        scientificAction = 'Keratinizes the teat canal lining to block somatic pathogen infiltration.';
      }
    } else if (animalType === 'horse') {
      if (clinicalFocus === 'skeletal') {
        productId = 'sigmin-vc-eq';
        calculationText = weight < 350 ? '50 grams of SigMin VC (EQ) daily.' : '100 grams of SigMin VC (EQ) daily.';
        scientificAction = 'Supplies myofibrillar repair peptides and bone density multipliers.';
      } else if (clinicalFocus === 'joints-eq') {
        productId = 'collasig-bj-eq';
        const loading = weight < 350 ? '30g' : '50g';
        const main = weight < 350 ? '15g' : '25g';
        calculationText = `Loading Phase (7 days): ${loading} daily. Maintenance Phase: ${main} daily of CollaSig BJ (EQ).`;
        scientificAction = 'Binds structural sulfur (MSM) and high-potency collagen to lubricate running hocks.';
      }
    }

    const matchedProduct = products.find(p => p.id === productId);
    return {
      product: matchedProduct,
      calculationText,
      scientificAction
    };
  }, [animalType, weight, clinicalFocus]);

  return (
    <section id="dose-finder" className="section-padding" style={{ backgroundColor: 'var(--color-sage)', position: 'relative' }}>
      <div className="molecule-bg" />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>
            Clinical Dosage Calculator
          </span>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            Scientific <span style={{ fontStyle: 'italic' }}>Dose Finder</span>
          </h2>
          <p style={{ maxWidth: '650px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem' }}>
            Enter your animal's biometrics and clinical targets to compute biochemist-approved nutritional balances instantly.
          </p>
        </div>

        {/* Diagnostic Calculator Split Box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '3rem',
          alignItems: 'stretch'
        }} className="consultant-split">
          
          {/* Left Column: Interactive Form Card */}
          <div className="glass-card" style={{
            padding: '2.5rem',
            backgroundColor: 'var(--color-white)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={20} style={{ color: 'var(--color-gold)' }} /> Biometric Configurator
            </h3>

            {/* Field 1: Choose Animal Category */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                1. Select Veterinary Class
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem' }} className="calc-selector">
                {[
                  { id: 'dog', label: '🐶 Dog' },
                  { id: 'cat', label: '🐱 Cat' },
                  { id: 'cow', label: '🐄 Cow' },
                  { id: 'horse', label: '🐴 Horse' }
                ].map((an) => (
                  <button
                    key={an.id}
                    onClick={() => setAnimalType(an.id)}
                    style={{
                      padding: '0.65rem 0.25rem',
                      borderRadius: '8px',
                      border: animalType === an.id ? '2px solid var(--color-forest)' : '1px solid var(--color-border)',
                      backgroundColor: animalType === an.id ? 'var(--color-sage)' : 'var(--color-white)',
                      color: 'var(--color-forest)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {an.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 2: Custom Weight Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Scale size={14} style={{ color: 'var(--color-gold)' }} /> 2. Animal Body Weight
                </label>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-forest)', backgroundColor: 'var(--color-sage)', padding: '0.25rem 0.75rem', borderRadius: '100px' }}>
                  {weight} kg
                </span>
              </div>
              <input
                type="range"
                min={animalType === 'cat' ? 1 : animalType === 'dog' ? 2 : animalType === 'cow' ? 100 : 150}
                max={animalType === 'cat' ? 12 : animalType === 'dog' ? 80 : animalType === 'cow' ? 800 : 900}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={{
                  width: '100%',
                  accentColor: 'var(--color-forest)',
                  cursor: 'pointer',
                  height: '6px',
                  borderRadius: '100px'
                }}
              />
            </div>

            {/* Field 3: Target Clinical Diagnosis */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                3. Primary Health Defect Target
              </label>
              <select
                value={clinicalFocus}
                onChange={(e) => setClinicalFocus(e.target.value)}
                className="form-input"
                style={{ cursor: 'pointer', fontWeight: 600 }}
              >
                {focusOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column: Dynamic Diagnosis Prescriptions Display */}
          <div className="glass-card-dark" style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            {recommendation.product ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%' }} className="fade-in">
                {/* Header recommendation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Award size={14} style={{ color: 'var(--color-gold)' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Veterinary Bio-Match
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                    Calculated Locally
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Recommended Scientific Solution
                  </span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-white)', fontFamily: 'var(--font-serif)' }}>
                    {recommendation.product.name}
                  </h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-gold)', fontWeight: 600, fontStyle: 'italic' }}>
                    {recommendation.product.tagline}
                  </span>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }} />

                {/* Dosage computation box */}
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Calculated Dosage Formulation
                  </span>
                  <p style={{ fontSize: '1.15rem', color: 'var(--color-white)', fontWeight: 700, lineHeight: 1.4 }}>
                    {recommendation.calculationText}
                  </p>
                </div>

                {/* Specific chemical action */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Biological Action Mechanism
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    {recommendation.scientificAction}
                  </p>
                </div>

                {/* Spec drawer trigger button */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }} className="calc-action-row">
                  <button
                    onClick={() => onProductSelect(recommendation.product.id)}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.9rem'
                    }}
                  >
                    View Ingredient Specs <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '2rem' }}>
                <ShieldAlert size={48} style={{ color: 'var(--color-gold)', opacity: 0.15, marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                  Loading clinical prescription models... Choose biometrics to output scientific matches.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .consultant-split { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .calc-selector { grid-template-columns: 1fr 1fr !important; }
          .calc-action-row { flex-direction: column !important; gap: 0.75rem !important; }
        }
      `}} />
    </section>
  );
}
