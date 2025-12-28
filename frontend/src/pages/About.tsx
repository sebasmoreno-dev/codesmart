import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>Quiénes Somos</h1>
      <p>
        En CodeSmart Solutions S.A.S. somos una consultora tecnológica colombiana enfocada en impulsar la
        digitalización de las pequeñas y medianas empresas.
      </p>

      <section style={{ marginTop: '1rem' }}>
        <h2>Misión</h2>
        <p>Acercar la tecnología a los negocios tradicionales mediante soluciones accesibles y escalables.</p>
      </section>

      <section style={{ marginTop: '1rem' }}>
        <h2>Visión</h2>
        <p>Ser un referente regional en transformación digital para pymes.</p>
      </section>

      <section style={{ marginTop: '1rem' }}>
        <h2>Valores</h2>
        <ul>
          <li>Innovación</li>
          <li>Cercanía</li>
          <li>Calidad</li>
          <li>Sostenibilidad</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
