import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>CodeSmart Solutions</h1>
            </div>
            <nav className="navigation">
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
        </header>
    );
};

export default Header;