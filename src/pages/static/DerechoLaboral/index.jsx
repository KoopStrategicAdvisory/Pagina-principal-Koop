import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/derecho-laboral.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';
// Imágenes específicas de la página (provenientes de old/)
import imgDespido from '../../../Images/Despidoinjustificado.jpg';
import imgLiquidaciones from '../../../Images/liquidaciones.jpeg';
import imgAcoso from '../../../Images/acoso.jpg';
import imgPensiones from '../../../Images/pensiones.jpg';
import imgReintegro from '../../../Images/reintegro.png';
import imgContratoRealidad from '../../../Images/contratorealidad.png';

const FOOTER_CONFIG = marketingFooterConfigs.derechoLaboral;

const DerechoLaboral = () => {
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
        <div className="hero-text" aria-label="Derecho Laboral y Seguridad Social">
          <div className="hero-headline">Derecho Laboral y Seguridad Social</div>
        </div>
      </section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios-laborales">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS LABORALES</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores.</p>
    
          <div className="labor-grid">
            {/* 1. Despido injustificado */}
            <a href="#contratorealidad" className="labor-card" style={{ '--bg': `url(${imgContratoRealidad})` }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Contrato realidad</div>
                <div className="labor-card-desc">Reconocimiento del vínculo laboral y prestaciones.</div>
              </div>
            </a>
    
            {/* 2. Liquidaciones y prestaciones */}
            <a href="#liquidaciones" className="labor-card" style={{ '--bg': `url(${imgLiquidaciones})` }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Mora en el pago de la liquidación</div>
                <div className="labor-card-desc">Cálculo, reclamación y verificación de pagos.</div>
              </div>
            </a>
    
            {/* 3. Acoso laboral */}
            <a href="#acoso" className="labor-card" style={{ '--bg': `url(${imgAcoso})` }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Acoso laboral</div>
                <div className="labor-card-desc">Comités, protocolos, evidencias y defensa.</div>
              </div>
            </a>
    
            {/* 4. Pensiones y seguridad social */}
            <a href="#pensiones" className="labor-card" style={{ '--bg': `url(${imgPensiones})` }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Pensiones y seguridad social</div>
                <div className="labor-card-desc">Traslados, reliquidaciones y contingencias.</div>
              </div>
            </a>
    
            {/* 5. Reintegro laboral */}
            <a href="#reintegro" className="labor-card" style={{ '--bg': `url(${imgDespido})` }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Reintegro laboral</div>
                <div className="labor-card-desc">Acciones de reintegro por despido ilegal o con fuero.</div>
              </div>
            </a>
    
            {/* 6. Continuar agregando */}


            
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

export default DerechoLaboral;

