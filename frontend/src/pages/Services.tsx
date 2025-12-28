import React from 'react';
import ServiceCard from '../shared/ServiceCard';

const services = [
  { title: 'Desarrollo de software a la medida', desc: 'Diseñamos soluciones adaptadas a los procesos reales de tu empresa.' },
  { title: 'Plataformas web personalizadas', desc: 'Plataformas robustas y fáciles de usar para potenciar tu presencia online.' },
  { title: 'Aplicaciones web y móviles', desc: 'Experiencias móviles y web para conectar con tus clientes.' },
  { title: 'Automatización de procesos', desc: 'Reducimos tareas manuales para mejorar la eficiencia operativa.' },
  { title: 'Asesoría en transformación digital', desc: 'Estrategia, diagnóstico y acompañamiento.' },
  { title: 'Chatbots y soluciones con IA', desc: 'Soluciones conversacionales para mejorar atención y ventas.' },
];

const Services: React.FC = () => (
  <div>
    <h1>Servicios</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
      {services.map((s) => (
        <ServiceCard key={s.title} title={s.title} description={s.desc} />
      ))}
    </div>
  </div>
);

export default Services;
