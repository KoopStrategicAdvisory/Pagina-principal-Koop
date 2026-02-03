import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/derecho-familia.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.derechoFamilia;

const DerechoFamilia = () => {
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
<section 
  className="hero-section" id="inicio"
  style={{ backgroundImage: "url('/img/ninofamilia.webp')", backgroundPosition: "center 30%",  }} >
  <div className="hero-overlay" aria-hidden="true"></div> 
  <div className="hero-text" aria-label="Derecho de Familia">
    <div className="hero-headline">Derecho de Familia</div>
  </div>
</section>
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="servicios-familia">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS DE FAMILIA</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más.</p>
    
          <div className="labor-grid">
            {/* 1. Divorcio y separación */}
            <a href="#divorcio" className="labor-card" style={{ '--bg': 'url(\'img/divorcio.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Divorcio y separación</div>
                <div className="labor-card-desc">Representación y acuerdos amistosos o judiciales.</div>
              </div>
            </a>
    
            {/* 2. Custodia y patria potestad */}
            <a href="#custodia" className="labor-card" style={{ '--bg': 'url(\'img/Custodia.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Custodia y patria potestad</div>
                <div className="labor-card-desc">Defensa de los derechos de tus hijos y del núcleo familiar.</div>
              </div>
            </a>
    
            {/* 3. Alimentos y pensión alimentaria */}
            <a href="#alimentos" className="labor-card" style={{ '--bg': 'url(\'img/alimentos.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Alimentos y pensión alimentaria</div>
                <div className="labor-card-desc">Fijación, modificación y cobro de cuotas alimentarias.</div>
              </div>
            </a>
    
            {/* 4. Liquidación de sociedad conyugal */}
            <a href="#sociedad" className="labor-card" style={{ '--bg': 'url(\'img/Violencia.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Violencia intrafamiliar</div>
                <div className="labor-card-desc">Trámite ante comisaría de familia o proceso penal ante fiscalía.</div>
              </div>
            </a>
    
            {/* 5. Adopciones */}
            <a href="#comisariaseicbf" className="labor-card" style={{ '--bg': 'url(\'img/Bienestar.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Trámites frente a ICBF o Comisarías de familia</div>
                <div className="labor-card-desc">Acompañamiento en procesos administrativos.</div>
              </div>
            </a>
    
            {/* 6. Capitulaciones matrimoniales */}
            <a href="#capitulaciones" className="labor-card" style={{ '--bg': 'url(\'img/capitulaciones.png\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Capitulaciones matrimoniales</div>
                <div className="labor-card-desc">Acuerdos patrimoniales previos al matrimonio o unión libre.</div>
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

export default DerechoFamilia;

