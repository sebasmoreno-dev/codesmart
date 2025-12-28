import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; image?: string }> = ({ title, description, image }) => {
  return (
    <article className="card">
      {image && <img src={image} alt={title} />}
      <div style={{ padding: '0.5rem 0' }}>
        <h3>{title}</h3>
        <p style={{ marginTop: '0.5rem' }}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
