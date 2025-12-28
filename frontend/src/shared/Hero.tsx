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
    <section className="hero">
      <div className="site-container hero-content">
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>{subtitle}</p>}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {bullets.map((b) => (
            <span key={b} style={{ background: '#e6eefc', color: '#0b5fff', padding: '0.25rem 0.5rem', borderRadius: 4, fontSize: '0.95rem' }}>{b}</span>
          ))}
        </div>
        {ctaText && (
          <Link to={ctaLink} className="button">
            {ctaText}
          </Link>
        )}
      </div>
      <div className="hero-image">
        <img src="/assets/hero.svg" alt="Soluciones tecnológicas para pymes" />
      </div>
    </section>
  );
};

export default Hero;
