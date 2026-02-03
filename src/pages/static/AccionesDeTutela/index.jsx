import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/acciones-de-tutela.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.accionesDeTutela;

const AccionesDeTutela = () => {
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
  style={{ backgroundImage: "url('/img/Juezjuez.jpg')", backgroundPosition: "center 70%",  }} >
  <div className="hero-overlay" aria-hidden="true"></div> 
  <div className="hero-text" aria-label="Acciones de tutela">
    <div className="hero-headline">Acciones de tutela</div>
  </div>
</section>
    
      {/* SECCIóN CARDS */}
      <section className="labor-cards-section" id="servicios-planeacion">
        <div className="labor-cards-container">
          <div className="labor-tag">SERVICIOS DE Asesoría Contable</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Estructuración, protección y gestión de patrimonios familiares y empresariales.</p>
    
          <div className="labor-grid">
            {/* 1. Tutela al Derecho de Petición */}
            <a href="#peticion" className="labor-card" style={{ '--bg': 'url(\'img/tutelapeticion.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Tutela al Derecho de Petición</div>
                <div className="labor-card-desc">Para obtener respuestas de las autoridades.</div>
              </div>
            </a>

            {/* 2. Tutelas en temas de Salud */}
            <a href="#salud" className="labor-card" style={{ '--bg': 'url(\'img/tutelasalud.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Tutela en  Salud</div>
                <div className="labor-card-desc">Somos expertos dentro del área de la salud, velamos por sus intereses.</div>
              </div>
            </a>

            {/* 3. Revocatoria de decisiones judiciales */}
            <a href="#revocatoria" className="labor-card" style={{ '--bg': 'url(\'img/tuteladebido.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Revocatoria de decisiones judiciales</div>
                <div className="labor-card-desc">Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal.</div>
              </div>
            </a>
 
             {/* 4. Pensión mediante tutela */}
             <a href="#tutelapension" className="labor-card" style={{ '--bg': 'url(\'img/jueztutela.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SERVICIO</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Tutela para obtener pensión</div>
                <div className="labor-card-desc">Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral</div>
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

export default AccionesDeTutela;


