import React from 'react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';

const insights = [
  {
    title: 'Ashwagandha For Dairy Health And Farm Resilience',
    date: 'March 2026',
    summary:
      'A science-first view on how ashwagandha can support stress balance, productivity, and herd wellness in modern dairy systems.'
  },
  {
    title: 'Mycotoxins In Cattle Feed: Practical Risk Reduction',
    date: 'March 2026',
    summary:
      'A field-focused note on mycotoxin exposure, early warning signs, and preventive feed strategies to protect milk quality and animal performance.'
  },
  {
    title: 'Monsoon Livestock Management For Yield Stability',
    date: 'June 2026',
    summary:
      'A seasonal operations guide covering hydration, hygiene, fungal-risk control, and nutrition support for better outcomes during monsoon pressure.'
  },
  {
    title: 'The Future Of Dairy: Insights From AAHAR 2026',
    date: 'May 2026',
    summary:
      'Highlights from AAHAR 2026 on precision nutrition, sustainable inputs, and practical innovations shaping next-generation dairy production.'
  }
];

const insightsUrl = 'https://www.linkedin.com/company/signate-animal-health-and-nutrition-pvt-ltd/posts/?feedView=articles';

export default function InsightsBlogs() {
  return (
    <section id="insights" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.6rem' }}>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: 'var(--color-forest)', marginBottom: '0.55rem' }}>
            Insights / Blogs
          </h2>
          <p style={{ color: 'var(--color-dark-text)', opacity: 0.75, fontSize: '0.98rem' }}>
            Recent scientific perspectives and field notes from the Signate team.
          </p>
        </div>

        <div className="insights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem' }}>
          {insights.map((item) => (
            <article
              key={item.title}
              className="glass-card"
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid rgba(1,42,28,0.1)',
                borderRadius: '16px',
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(1,42,28,0.6)', fontSize: '0.8rem', fontWeight: 700 }}>
                <CalendarDays size={14} />
                <span>{item.date}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', lineHeight: 1.35, color: 'var(--color-forest)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(1,42,28,0.78)' }}>{item.summary}</p>
            </article>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <a
            href={insightsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            View All Insights On LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 1180px) {
            .insights-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 700px) {
            .insights-grid { grid-template-columns: 1fr !important; }
          }
        `
        }}
      />
    </section>
  );
}
