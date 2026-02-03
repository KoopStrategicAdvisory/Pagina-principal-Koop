import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/auditoria.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.auditoria;

const Auditoria = () => {
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
        <div className="hero-text" aria-label="Auditoría & Revisoría Fiscal">
          <div className="hero-headline">Auditoría & Revisoría Fiscal</div>
        </div>
      </section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios-auditoria">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Supervisión independiente y aseguramiento financiero y contable.</p>
    
          <div className="labor-grid">
            {/* 1. Auditoría financiera */}
            <a href="#financiera" className="labor-card" style={{ '--bg': 'url(\'img/Acompañamiento.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Auditoría financiera</div>
                <div className="labor-card-desc">Opinión independiente sobre estados financieros.</div>
              </div>
            </a>
    
            {/* 2. Revisoría fiscal permanente */}
            <a href="#revisoria" className="labor-card" style={{ '--bg': 'url(\'img/Victimas.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Revisoría fiscal permanente</div>
                <div className="labor-card-desc">Cumplimiento de obligaciones legales y societarias.</div>
              </div>
            </a>
    
            {/* 3. Evaluación de control interno */}
            <a href="#control" className="labor-card" style={{ '--bg': 'url(\'img/donacionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Evaluación de control interno</div>
                <div className="labor-card-desc">Diagnósticos y recomendaciones.</div>
              </div>
            </a>
    
            {/* 4. Cumplimiento normativo */}
            <a href="#cumplimiento" className="labor-card" style={{ '--bg': 'url(\'img/sucesionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Cumplimiento normativo</div>
                <div className="labor-card-desc">Verificación de normas contables y fiscales.</div>
              </div>
            </a>
    
            {/* 6. Informes especiales */}
            <a href="#informes" className="labor-card" style={{ '--bg': 'url(\'img/capitulaciones.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Informes especiales</div>
                <div className="labor-card-desc">Dictámenes sobre hechos particulares.</div>
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

export default Auditoria;


