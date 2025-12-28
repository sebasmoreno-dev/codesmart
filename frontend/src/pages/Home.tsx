import React from 'react';
import Hero from '../shared/Hero';
import ServiceCard from '../shared/ServiceCard';
import CTA from '../shared/CTA';

const services = [
  { title: 'Desarrollo de software a la medida', desc: 'Diseñamos soluciones adaptadas a los procesos reales de tu empresa.', img: '/assets/service1.svg' },
  { title: 'Plataformas web personalizadas', desc: 'Plataformas robustas y fáciles de usar para potenciar tu presencia online.', img: '/assets/service2.svg' },
  { title: 'Automatización de procesos', desc: 'Reducimos tareas manuales para mejorar la eficiencia operativa.', img: '/assets/service3.svg' },
];

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Transformamos tu empresa con tecnología"
        subtitle="Soluciones de software a la medida para pymes colombianas"
        bullets={["Desarrollo web", "Automatización", "Transformación digital"]}
        ctaText="Solicita una asesoría"
        ctaLink="/contacto"
      />

      <section className="section">
        <h2>Servicios destacados</h2>
        <div className="grid" style={{ marginTop: '1rem' }}>
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.desc} image={s.img} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Por qué elegirnos</h2>
        <p>
          Acompañamos a nuestras pymes clientes con soluciones accesibles, escalables y alineadas a
          sus procesos. Nuestro enfoque combina experiencia técnica con cercanía y educación digital.
        </p>
      </section>

      <CTA />
    </div>
  );
};

export default Home;
