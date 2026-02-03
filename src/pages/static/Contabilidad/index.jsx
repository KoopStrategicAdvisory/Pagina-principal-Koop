import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/contabilidad.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.contabilidad;

const Contabilidad = () => {
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
      
    
      {/* SECCIÓN CARDS */}
      <section className="labor-cards-section" id="subareas-contabilidad">
        <div className="labor-cards-container">
          <div className="labor-tag">CONTABILIDAD</div>
          <h2 className="labor-title">Cómo te ayudamos</h2>
          <p className="labor-sub">Selecciona la especialidad contable que necesitas.</p>
    
          <div className="labor-grid">
            {/* Auditoría y Revisoría Fiscal */}
            <a href="/auditoria" className="labor-card" style={{ '--bg': 'url(\'img/auditoria.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SUBÁREA</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Auditoría y Revisoría Fiscal</div>
                <div className="labor-card-desc">Supervisión financiera independiente.</div>
              </div>
            </a>
    
            {/* Impuestos y Planeación Tributaria */}
            <a href="/impuestos" className="labor-card" style={{ '--bg': 'url(\'img/impuestos-en-colombia.jpg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SUBÁREA</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Impuestos y Planeación Tributaria</div>
                <div className="labor-card-desc">Consultoría y cumplimiento fiscal.</div>
              </div>
            </a>
    
            {/* Asesoría Contable */}
            <a href="/asesoria-contable" className="labor-card" style={{ '--bg': 'url(\'img/que_es_la_contabilidad.jpeg\')' }}>
              <div className="labor-card-content">
                <span className="labor-badge">SUBÁREA</span>
                <div className="labor-card-title"><span className="labor-dot"></span>Asesoría Contable</div>
                <div className="labor-card-desc">Protección y optimización del patrimonio.</div>
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

export default Contabilidad;

