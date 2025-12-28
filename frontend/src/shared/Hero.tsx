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
        {/* Use PUBLIC_URL so files in public/assets are served from /assets/... */}
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL || ''}/assets/360ac6_d89fb98304644bbc83f92ad408afe7bd~mv2.avif`} type="image/avif" />
          <source srcSet={`${process.env.PUBLIC_URL || ''}/assets/360ac6_c9fbaa9bcc3544d993206cbb031ccccd~mv2.jpg`} type="image/jpeg" />
          <img
            src={`${process.env.PUBLIC_URL || ''}/assets/360ac6_c9fbaa9bcc3544d993206cbb031ccccd~mv2.jpg`}
            alt="Soluciones tecnológicas para pymes"
            loading="lazy"
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
