import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} CodeSmart Solutions S.A.S. — Todos los derechos reservados</p>
                <p>Contacto: info@codesmart.co · Bogotá, Colombia</p>
            </div>
        </footer>
    );
};

export default Footer;
