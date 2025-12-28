import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For informational site, we just log the form data
    console.log({ name, email, message });
    alert('Gracias! Tu solicitud ha sido enviada (demo).');
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <p>¿Listo para digitalizar tu empresa? Contáctanos y recibe una asesoría personalizada.</p>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem', maxWidth: 600 }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Nombre</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Correo</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Mensaje</label>
          <br />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <button className="button" type="submit">Enviar</button>
      </form>
      <section style={{ marginTop: '1.5rem' }}>
        <p>Email: info@codesmart.co</p>
        <p>Ciudad: Bogotá, Colombia</p>
        <p>WhatsApp: <a href="https://wa.me/573001234567">Iniciar chat</a></p>
      </section>
    </div>
  );
};

export default Contact;
