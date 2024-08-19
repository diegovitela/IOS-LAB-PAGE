import React, { useState } from 'react';
import reactLogo from './assets/IOS.PNG'; 
import './Navbar.css'; // Asegúrate de crear este archivo CSS

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={reactLogo} className="navbar-logo" alt="Logo" />
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : 'hidden'}`}>
        <li><a href="#home">Sobre Nosotros</a></li>
        <li><a href="#about">Cursos</a></li>
        <li><a href="#services">Apps</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button className="navbar-button">Inicia Sesión</button>
    </nav>
  );
};

export default Navbar;

