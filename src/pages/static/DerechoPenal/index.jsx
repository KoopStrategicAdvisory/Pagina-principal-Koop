import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/derecho-penal.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.derechoPenal;

const DerechoPenal = () => {
  useMenu();
  usePageTransition();
  const pageCss = extractStylesFromHtml(pageHtml)
    .replace(/url\(\s*(['"]?)img\//gi, 'url($1/img/');
  useNormalizeAssets();
  return (
  <>
    <style>{pageCss}</style>
    {/* Overlay de transición */}
      <div className="page-transition" aria-hidden="true"></div>
    
      {/* NAV */}
      
    
      {/* HERO */}
      <section className="hero-section" id="inicio">
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-text" aria-label="Derecho Penal">
          <div className="hero-headline">Derecho Penal</div>
        </div>
      </section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios penales">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS PENALES</div>
          <h2 className="labor-title">Confíe su caso a manos profesionales y con experiencia.</h2>
          <p className="labor-sub">Representamos sus intereses con experiencia y conocimiento en el ámbito penal.</p>
    
          <div className="labor-grid">
            {/* 1. Audiencias, medidas de aseguramiento y trámite penal */}
            <a href="#audiencias" className="labor-card" style={{ '--bg': 'url(\'img/Audiencias.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Audiencias, medidas de aseguramiento y trámite penal</div>
                <div className="labor-card-desc">Protección de sus derechos durante todo el trámite penal, hasta sentencia.</div>
              </div>
            </a>
    
            {/* 2. Asesoría y Representación Penal integral para Víctimas */}
            <a href="#asesoria" className="labor-card" style={{ '--bg': 'url(\'img/Victimas.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Asesoría y Representación Penal integral para Víctimas</div>
                <div className="labor-card-desc">Representación legal experta para víctimas, desde la denuncia hasta la indemnización.</div>
              </div>
            </a>
    
            {/* 3. Acompañamiento en audiencias y fases procesales clave */}
            <a href="#acompañamiento" className="labor-card" style={{ '--bg': 'url(\'img/Acompañamiento.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Acompañamiento en audiencias y fases procesales clave</div>
                <div className="labor-card-desc">Defensa en audiencias específicas. Consulte más acá.</div>
              </div>
            </a>
    
            {/* 4. Habeas corpus y libertades inmediatas */}
            <a href="#habeas" className="labor-card" style={{ '--bg': 'url(\'img/habeas.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Habeas corpus y libertades inmediatas</div>
                <div className="labor-card-desc">Trámite inmediato para restablecer la libertad personal.</div>
              </div>
            </a>
    
            {/* 5. Defensa y Asesoría en Casos de Delitos Sexuales */}
            <a href="#defensa" className="labor-card" style={{ '--bg': 'url(\'img/sexuales.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Defensa y Asesoría en Casos de Delitos Sexuales</div>
                <div className="labor-card-desc">Protección integral de derechos en investigaciones y juicios por delitos sexuales.</div>
              </div>
            </a>
    
            {/* 6. Control y Seguimiento de Procesos en Fiscalía */}
            <a href="#control" className="labor-card" style={{ '--bg': 'url(\'img/fiscalia.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Control y Seguimiento de Procesos en Fiscalía</div>
                <div className="labor-card-desc">Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos.</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    
      <SiteFooter {...FOOTER_CONFIG} />
    
      {/*
        // Menú móvil
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (menuToggle && navMenu) {
          menuToggle.onclick = () => navMenu.classList.toggle('open');
                navMenu.querySelectorAll('a').forEach(link => {
            if(!link.classList.contains('drop-btn')){
              link.onclick = () => navMenu.classList.remove('open');
            }
          });
        }
        const areasToggle = document.getElementById('areas-toggle');
        if(areasToggle){
          areasToggle.addEventListener('click', (e)=>{
            e.preventDefault();
            areasToggle.parentElement.classList.toggle('open');
          });
        }
    
        // Año dinámico
        const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
    
        // Manejo de transiciones
        (function () {
          const overlay = document.querySelector('.page-transition');
          
          // Asegurar que el overlay esté oculto al cargar la página
          function hideOverlay() {
            if (overlay) {
              overlay.classList.remove('is-active');
            }
          }
          
          // Ocultar overlay inmediatamente al cargar
          hideOverlay();
          
          // Ocultar overlay cuando se restaura desde BFCache
          window.addEventListener('pageshow', (e) => {
            if (e.persisted) {
              hideOverlay();
            }
          });
          
          // Ocultar overlay cuando se hace focus en la ventana
          window.addEventListener('focus', hideOverlay);
          
          // Ocultar overlay cuando se carga completamente la página
          window.addEventListener('load', hideOverlay);
          
          // Transición de salida interna
          function shouldIntercept(link) {
            if (!link.href) return false;
            if (link.target && link.target.toLowerCase() === '_blank') return false;
            const href = link.getAttribute('href');
            if (!href) return false;
            if (href.startsWith('#')) return false;
            if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    
            const url = new URL(link.href, window.location.href);
            if (url.hostname !== window.location.hostname) return false;
            if (url.pathname === window.location.pathname && url.hash) return false;
            return true;
          }
          
          document.addEventListener('click', (e) => {
            const a = e.target.closest('a');
            if (!a || !shouldIntercept(a)) return;
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    
            e.preventDefault();
            overlay && overlay.classList.add('is-active');
            setTimeout(() => { window.location.href = a.href; }, 600);
          });
        })();
      */}
  </>
  );
};

export default DerechoPenal;

