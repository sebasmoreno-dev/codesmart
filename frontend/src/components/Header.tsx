import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="site-container header-inner">
                <div className="logo">
                    <h1>CodeSmart</h1>
                </div>
                <button className="mobile-toggle" onClick={() => setOpen((s) => !s)} aria-expanded={open} aria-label="Abrir menú">
                    ☰
                </button>
                <nav className={`navigation ${open ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/quienes-somos">Quiénes Somos</Link>
                        </li>
                        <li>
                            <Link to="/servicios">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/como-trabajamos">Cómo Trabajamos</Link>
                        </li>
                        <li>
                            <Link to="/sectores">Sectores</Link>
                        </li>
                        <li>
                            <Link to="/innovacion">Innovación</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;