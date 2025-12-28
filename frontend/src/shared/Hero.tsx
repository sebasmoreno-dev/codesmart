import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  subtitle?: string;
  bullets?: string[];
  ctaText?: string;
  ctaLink?: string;
};

const Hero: React.FC<Props> = ({ title, subtitle, bullets = [], ctaText, ctaLink = '/' }) => {
  return (
    <section style={{ background: '#0f172a', color: '#fff', padding: '3rem 1rem', borderRadius: 8 }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{subtitle}</p>}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {bullets.map((b) => (
            <span key={b} style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: 4 }}>{b}</span>
          ))}
        </div>
        {ctaText && (
          <Link to={ctaLink} className="button">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
