import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useMenu from '../hooks/useMenu';
import '../styles/navbar-base.css';
import '../styles/navbar-extras.css';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  useMenu();
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    try { await logout(); } catch (_) {}
    setUserOpen(false);
    navigate('/login', { replace: true });
  };
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <img src="/Koop Logo.png" alt="Logo Koop" className="logo-img" />
          <div className="logo-text">KOOP STRATEGIC ADVISORY</div>
        </Link>
        <div className="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>
        <div className="nav-menu" id="nav-menu">
          {!isAuthenticated && (
            <>
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
            </>
          )}
          {isAuthenticated ? (
            <div className={`dropdown ${userOpen ? 'open' : ''}`}>
              <button
                className="drop-btn"
                aria-haspopup="true"
                aria-expanded={userOpen ? 'true' : 'false'}
                onClick={() => setUserOpen((v) => !v)}
              >
                {user?.name || 'Mi cuenta'}
              </button>
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/mis-casos">Mis casos</Link>
                  <Link to="/logout" onClick={(e) => { e.preventDefault(); onLogout(); }}>Cerrar sesión</Link>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="koop-cta" aria-label="CLIENTE KOOP">
              {"CLIENTE KOOP".split('').map((ch, i) => (
                <span className="letter" style={{ '--i': i }} key={i}>
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
