import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar-extras.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <img src="/Koop Logo.png" alt="Logo Koop" className="logo-img" />
          <div className="logo-text">KOOP STRATEGIC ADVISORY</div>
        </Link>
        <div className="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>
        <div className="nav-menu" id="nav-menu">
          <Link to="/#inicio">INICIO</Link>
          <div className="dropdown">
            <Link to="/#areas" className="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</Link>
            <div className="dropdown-content">
              <div className="dropdown-group">
                <Link to="/derecho" className="dropdown-title">Derecho</Link>
                <Link to="/derecho-laboral">Derecho Laboral</Link>
                <Link to="/derecho-penal">Derecho Penal</Link>
                <Link to="/tramites-notariales">Trámites notariales</Link>
                <Link to="/derecho-administrativo">Derecho Administrativo</Link>
                <Link to="/derecho-familia">Derecho de Familia</Link>
                <Link to="/contratacion-publica">Contratación Pública</Link>
                <Link to="/resolucion-disputas">Resolución de Disputas</Link>
                <Link to="/acciones-de-tutela">Acciones de Tutela</Link>
                <Link to="/insolvencia">Insolvencia</Link>
              </div>
              <div className="dropdown-group">
                <Link to="/contabilidad" className="dropdown-title">Contabilidad</Link>
                <Link to="/auditoria">Auditoría</Link>
                <Link to="/impuestos">Impuestos</Link>
                <Link to="/asesoria-contable">Asesoría Contable</Link>
              </div>
            </div>
          </div>
          <Link to="/#vision">NUESTRA VISIÓN</Link>
          <Link to="/login" className="koop-cta" aria-label="CLIENTE KOOP">
            {"CLIENTE KOOP".split('').map((ch, i) => (
              <span className="letter" style={{ '--i': i }} key={i}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </Link>
        </div>
      </div>
    </nav>
  );
}
