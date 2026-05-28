import React from 'react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';

const insights = [
  {
    title: 'Signate At Pet Expo India 2026: Companion Wellness Focus',
    date: 'September 2026',
    summary:
      'Highlights from Signate participation at Pet Expo India 2026, with focus on companion animal supplements and veterinarian engagement.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQFE4d5jODQCLA/feedshare-shrink_1280/B4DZ09WliKGcAM-/0/1774850824660?e=2147483647&t=62vW1UG2ts9P6sfQu2cpONsAwQetWTqSfVDo_LStOzQ&v=beta',
    href: 'https://www.linkedin.com/posts/signate-animal-health-and-nutrition-pvt-ltd_signate-was-pleased-to-participate-in-pet-activity-7444263919680094209-oWNq'
  },
  {
    title: 'Pet Expo India 2026 Participation Announcement',
    date: 'September 2026',
    summary:
      'An update covering Signate showcase plans for companion animal nutrition at Pet Expo India 2026 in Ahmedabad.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGc0Y6yN-kbOA/feedshare-shrink_1280/B4DZz5fbRFKoAM-/0/1773712291239?e=2147483647&t=Z7Pf87ChiVxbzrcY2S2JLAhdqIypvlvvVVtBa0mbwV8&v=beta',
    href: 'https://www.linkedin.com/posts/signate-animal-health-and-nutrition-pvt-ltd_signate-will-be-participating-in-pet-expo-activity-7439488565434159104-hgQm'
  },
  {
    title: 'Clinically Driven Product Performance At Pet Expo',
    date: 'September 2026',
    summary:
      'A technical update describing formulation depth and clinically guided companion product efficacy presented at the event.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGfqzJxktH9GA/feedshare-image-high-res/B4DZy8uLyRHcAU-/0/1772692749709?e=2147483647&t=oF5lUvxpzXfrSfTSzbo26XX0B_O8f033MLCQhtQ-LV4&v=beta',
    href: 'https://www.linkedin.com/posts/signate-animal-health-and-nutrition-pvt-ltd_signate-will-be-participating-in-pet-expo-activity-7435212297394016256-gUPT'
  },
  {
    title: 'Industry Collaboration Through Veterinary Participation',
    date: 'August 2026',
    summary:
      'Field-focused reflections on participation, knowledge exchange, and practical companion-animal solutions discussed with stakeholders.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHLy-GxZ1PHoA/feedshare-shrink_1280/B4DZwZUr9AJcAg-/0/1769951379475?e=2147483647&t=5Zp4dqUmbEtWNGiAIpAjfbni_H6Q6Q3ndlPOj4pasqg&v=beta',
    href: 'https://www.linkedin.com/posts/signate-animal-health-and-nutrition-pvt-ltd_signate-had-the-opportunity-to-participate-activity-7423714158757679104-sySp'
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
            <a
              key={item.title}
              className="glass-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid rgba(1,42,28,0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderBottom: '1px solid rgba(1,42,28,0.08)', backgroundColor: 'rgba(1,42,28,0.04)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(1,42,28,0.6)', fontSize: '0.8rem', fontWeight: 700 }}>
                <CalendarDays size={14} />
                <span>{item.date}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', lineHeight: 1.35, color: 'var(--color-forest)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(1,42,28,0.78)' }}>{item.summary}</p>
              </div>
            </a>
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
