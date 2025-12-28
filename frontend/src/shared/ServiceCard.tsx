import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.08)', flex: '1 1 280px' }}>
      <h3>{title}</h3>
      <p style={{ marginTop: '0.5rem' }}>{description}</p>
    </div>
  );
};

export default ServiceCard;
