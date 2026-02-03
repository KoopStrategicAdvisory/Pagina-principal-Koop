import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/tramites-notariales.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.tramitesNotariales;

const TramitesNotariales = () => {
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
        <div className="hero-text" aria-label="Trámites Notariales">
          <div className="hero-headline">Trámites Notariales</div>
        </div>
      </section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios penales">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS FRENTE A NOTARIA</div>
          <h2 className="labor-title">Su trámite notarial exprés.</h2>
          <p className="labor-sub">Listo en tiempo récord, con total seguridad jurídica.</p>
    
          <div className="labor-grid">
            {/* 1. Compraventa de inmuebles. */}
            <a href="#compraventa" className="labor-card" style={{ '--bg': 'url(\'img/compraventainmueble.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Compraventa de inmuebles.</div>
                <div className="labor-card-desc">Con revisión de títulos y elaboración de minuta.</div>
              </div>
            </a>
    
            {/* 2. Constitución, reforma o liquidación de sociedades */}
            <a href="#constitucion" className="labor-card" style={{ '--bg': 'url(\'img/constitucion.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Constitución, reforma o liquidación de sociedades</div>
                <div className="labor-card-desc">(S.A.S., LTDA., S.A., etc.).</div>
              </div>
            </a>
    
            {/* 3. Sucesiones por causa de muerte */}
            <a href="sucesiones" className="labor-card" style={{ '--bg': 'url(\'img/sucesionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Sucesiones por causa de muerte</div>
                <div className="labor-card-desc">Realización de escrito de solicitud hasta elevación a escritura pública.</div>
              </div>
            </a>
    
            {/* 4. Capitulaciones matrimoniales y liquidación de sociedad conyugal. */}
            <a href="#capitulaciones" className="labor-card" style={{ '--bg': 'url(\'img/capitulaciones.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Capitulaciones matrimoniales y liquidación de sociedad conyugal.</div>
                <div className="labor-card-desc">Proteja su patrimonio y formalice acuerdos con respaldo legal.</div>
              </div>
            </a>
    
            {/* 5. Levantamiento de hipotecas */}
            <a href="#levantamiento" className="labor-card" style={{ '--bg': 'url(\'img/levantamiento.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Levantamiento de hipotecas</div>
                <div className="labor-card-desc">Trámite de levantamiento exprés y sin dilaciones.</div>
              </div>
            </a>
    
            {/* 6. Donaciones de bienes inmuebles */}
            <a href="#donaciones" className="labor-card" style={{ '--bg': 'url(\'img/donacionescambio.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Donaciones de bienes inmuebles</div>
                <div className="labor-card-desc">Transfiera su patrimonio con seguridad jurídica y sin contratiempos.</div>
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

export default TramitesNotariales;


