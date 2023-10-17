import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <>
    <div className="Navbar">
        <h2>MI SUEÑO<span>LANERIA</span></h2>
        <div className="Nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos/conjunto">Conjuntos</Link>
          <Link to="/productos/individual">Individuales</Link>
          <Link to="/nosotros">Acerca de Nosotros</Link>
          <Link to="/"> 
          <CartWidget /> 
          </Link>
        </div>
        </div>
    </>
  );
}

export default Navbar;