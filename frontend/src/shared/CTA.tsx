import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#e6f0ff', borderRadius: 8 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3>¿Listo para digitalizar tu empresa?</h3>
          <p>Contáctanos y recibe una asesoría personalizada.</p>
        </div>
        <div>
          <Link to="/contacto" className="button">Contactar</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
