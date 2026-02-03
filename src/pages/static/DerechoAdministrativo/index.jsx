import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/derecho-administrativo.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.derechoAdministrativo;

const DerechoAdministrativo = () => {
  useMenu();
  usePageTransition();
  const pageCss = extractStylesFromHtml(pageHtml)
    .replace(/url\(\s*(['"]?)img\//gi, 'url($1/img/derecho-administrativo/');
  useNormalizeAssets();
  return (
  <>
    <style>{pageCss}</style>
    {/* Overlay de transición */}
      <div className="page-transition" aria-hidden="true"></div>
    
      {/* NAV */}
      
    
      {/* HERO */}
<section 
  className="hero-section" id="inicio"
  style={{ backgroundImage: "url('/img/Consejo-deestado.avif')", backgroundPosition: "center 80%",  }} >
  <div className="hero-overlay" aria-hidden="true"></div> 
  <div className="hero-text" aria-label="Derecho Administrativo">
    <div className="hero-headline">Derecho Administrativo</div>
  </div>
</section>
    
      {/* SECCIóN CARDS */}
      <section className="labor-cards-section" id="servicios-derecho-administrativo">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS DE DERECHO ADMINISTRATIVO</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Asesoría en trámites y procedimientos ante la administración pública.</p>
    
          <div className="labor-grid">
            {/* 1. Conceptos y asesorías administrativas */}

            <a href="#peticion" className="labor-card" style={{ '--bg': 'url(\'img/Gestionurbana.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Gestión Urbanística</div>
                <div className="labor-card-desc">Asesorías en licencias y planeación urbanística.</div>
              </div>
            </a>
                
    
            {/* 3. Procesos disciplinarios */}
            <a href="#disciplinario" className="labor-card" style={{ '--bg': 'url(\'img/Disci.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Procesos disciplinarios</div>
                <div className="labor-card-desc">Defensa ante investigaciones y sanciones.</div>
              </div>
            </a>
    
            {/* 4. Contrataci�n estatal */}
            <a href="#contratacion" className="labor-card" style={{ '--bg': 'url(\'img/contrato estatal.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Contratación estatal</div>
                <div className="labor-card-desc">Acompañamiento en etapas precontractuales y contractuales.</div>
              </div>
            </a>
    
            {/* 5. Acciones de nulidad y restablecimiento */}
            <a href="#nulidad" className="labor-card" style={{ '--bg': 'url(\'img/Respfiscal.webp\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Procesos de responsabilidad fiscal</div>
                <div className="labor-card-desc">Conflictos derivados de administración de dineros públicos.</div>
              </div>
            </a>
    
            {/* 6. Derechos de petici�n */}

            <a href="#conceptos" className="labor-card" style={{ '--bg': 'url(\'img/Asesoria.webp\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Conceptos y asesorías administrativas</div>
                <div className="labor-card-desc">Elaboración de conceptos y respuestas a requerimientos.</div>
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

export default DerechoAdministrativo;


