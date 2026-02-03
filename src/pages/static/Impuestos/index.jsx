import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/impuestos.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.impuestos;

const Impuestos = () => {
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
        <div className="hero-text" aria-label="Impuestos">
          <div className="hero-headline">Impuestos</div>
        </div>
      </section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios-impuestos">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS DE IMPUESTOS</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Consultoría tributaria y planeación fiscal para empresas y personas.</p>
    
          <div className="labor-grid">
            {/* 1. Planeación tributaria */}
            <a href="#planeacion" className="labor-card" style={{ '--bg': 'url(\'img/Acompañamiento.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Planeación tributaria</div>
                <div className="labor-card-desc">Estructuras fiscales eficientes y legales.</div>
              </div>
            </a>
    
            {/* 2. Declaraciones y cumplimiento */}
            <a href="#declaraciones" className="labor-card" style={{ '--bg': 'url(\'img/Victimas.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Declaraciones y cumplimiento</div>
                <div className="labor-card-desc">Preparación y presentación oportuna de impuestos.</div>
              </div>
            </a>
    
            {/* 3. Defensa ante la DIAN */}
            <a href="#dian" className="labor-card" style={{ '--bg': 'url(\'img/donacionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Defensa ante la DIAN</div>
                <div className="labor-card-desc">Respuestas a requerimientos y litigios tributarios.</div>
              </div>
            </a>
    
            {/* 4. Precios de transferencia */}
            <a href="#transferencia" className="labor-card" style={{ '--bg': 'url(\'img/sucesionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Precios de transferencia</div>
                <div className="labor-card-desc">Estudios y documentación obligatoria.</div>
              </div>
            </a>
    
            {/* 5. Auditoría fiscal */}
            <a href="#auditoria" className="labor-card" style={{ '--bg': 'url(\'img/Audiencias.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Auditoría fiscal</div>
                <div className="labor-card-desc">Revisión de obligaciones y contingencias.</div>
              </div>
            </a>
    
            {/* 6. Obligaciones municipales */}
            <a href="#municipales" className="labor-card" style={{ '--bg': 'url(\'img/capitulaciones.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Obligaciones municipales</div>
                <div className="labor-card-desc">Impuestos locales y de industria y comercio.</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    
      <SiteFooter {...FOOTER_CONFIG} />
    
      {/*
        // Men� m�vil
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
    
        // A�o din�mico
        const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
    
        // Manejo de transiciones
        (function () {
          const overlay = document.querySelector('.page-transition');
          
          // Asegurar que el overlay est� oculto al cargar la p�gina
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
          
          // Ocultar overlay cuando se carga completamente la p�gina
          window.addEventListener('load', hideOverlay);
          
          // Transici�n de salida interna
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

export default Impuestos;


