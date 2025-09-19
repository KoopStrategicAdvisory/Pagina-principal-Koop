// Navbar.jsx — Menú superior de navegación para todo el sitio
// Para cambiar enlaces:
// - Busca elementos <Link to="/ruta">TEXTO</Link>
// - Agrega o elimina según necesidad
// - El botón "CLIENTE KOOP" lleva a /login cuando NO hay sesión
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/navbar-base.css';
import '../styles/navbar-extras.css';
import { normalizeUpperAscii } from '../utils/strings.js';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    try { await logout(); } catch (_) {}
    setUserOpen(false);
    setMenuOpen(false);
    setAreasOpen(false);
    navigate('/login', { replace: true });
  };

  const onMenuToggle = () => {
    setMenuOpen((v) => {
      const next = !v;
      if (!next) setAreasOpen(false);
      return next;
    });
  };

  // Cierra el menú al hacer clic en algún enlace (mejor UX móvil)
  const onNavClick = (e) => {
    const a = e.target.closest('a');
    if (a && !a.classList.contains('drop-btn')) {
      setMenuOpen(false);
      setAreasOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <img src="/Koop Logo.png" alt="Logo Koop" className="logo-img" />
          <div className="logo-text">KOOP STRATEGIC ADVISORY</div>
        </Link>
        <div className="menu-toggle" id="menu-toggle" onClick={onMenuToggle} aria-controls="nav-menu" aria-expanded={menuOpen ? 'true' : 'false'} role="button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu" onClick={onNavClick} data-auth={isAuthenticated ? '1' : '0'}>
          <div className="main-links">
            {/* Enlaces principales (edita/añade/quita aquí) */}
            <Link to="/#inicio">INICIO</Link>
            <div className={`dropdown ${areasOpen ? 'open' : ''}`}>
              <Link
                to="/#areas"
                className="drop-btn"
                id="areas-toggle"
                aria-expanded={areasOpen ? 'true' : 'false'}
                onClick={(e) => { e.preventDefault(); setAreasOpen((v) => !v); }}
              >
                ÁREAS DE PRÁCTICA
              </Link>
              <div className="dropdown-content">
                <div className="dropdown-group">
                  {/* Sección: Derecho (submenú) */}
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
                  {/* Sección: Contabilidad (submenú) */}
                  <Link to="/contabilidad" className="dropdown-title">Contabilidad</Link>
                  <Link to="/auditoria">Auditoría</Link>
                  <Link to="/impuestos">Impuestos</Link>
                  <Link to="/asesoria-contable">Asesoría Contable</Link>
                </div>
              </div>
            </div>
            {!isAuthenticated && <Link to="/#vision">NUESTRA VISIÓN</Link>}
          </div>
          {isAuthenticated ? (
            <div className={`dropdown ${userOpen ? 'open' : ''}`}>
              <button
                className="drop-btn"
                aria-haspopup="true"
                aria-expanded={userOpen ? 'true' : 'false'}
                onClick={() => setUserOpen((v) => !v)}
              >
                {normalizeUpperAscii(user?.name || 'Mi cuenta')}
              </button>
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <Link to="/dashboard">Perfil</Link>
                  <Link to="/mi-expediente">Mi expediente</Link>
                  <Link to="/mis-casos">Mis casos</Link>
                  <Link to="/logout">
                    Cerrar sesión
                  </Link>
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
