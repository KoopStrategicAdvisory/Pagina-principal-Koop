import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../../old/derecho.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import { Link } from 'react-router-dom';
import SiteFooter from '../../../components/common/SiteFooter';
import { marketingFooterConfigs } from '../../../constants/footerConfigs';

const FOOTER_CONFIG = marketingFooterConfigs.derecho;
import imgDespido from '../../../Images/Despidoinjustificado.jpg';

const Derecho = () => {
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
      <section className="labor-cards-section" id="areas-derecho">
        <div className="labor-cards-container">
          <div className="labor-tag">DERECHO</div>
          <h2 className="labor-title">Confíe su caso a manos profesionales y con experiencia.</h2>
          <p className="labor-sub">Asesoría integral en diversas ramas del derecho.</p>
    
          <div className="labor-grid">
            <Link to="/derecho-penal" className="labor-card" style={{ '--bg': 'url(\'/img/Audiencias.png\')' }}>
              <div className="labor-card-content">
                <div className="labor-card-title"><span className="labor-dot"></span>Derecho Penal</div>
                <div className="labor-card-desc">Defensa y asesoría en procesos penales.</div>
              </div>
            </Link>
    
            <Link to="/derecho-laboral" className="labor-card" style={{ '--bg': `url(${imgDespido})` }}>
              <div className="labor-card-content">
                <div className="labor-card-title"><span className="labor-dot"></span>Derecho Laboral</div>
                <div className="labor-card-desc">Soluciones en derecho laboral y seguridad social.</div>
              </div>
            </Link>
    
            <Link to="/tramites-notariales" className="labor-card" style={{ '--bg': 'url(\'img/tramitesnotariales.png\')' }}>
              <div className="labor-card-content">
                <div className="labor-card-title"><span className="labor-dot"></span>Trámites notariales</div>
                <div className="labor-card-desc">Gestiones notariales rápidas y seguras.</div>
              </div>
            </Link>
    
            <Link to="/derecho-administrativo" className="labor-card" style={{ '--bg': 'url(\'img/contrato estatal.jpg\')' }}>
              <div className="labor-card-content">
                <div className="labor-card-title"><span className="labor-dot"></span>Derecho Administrativo</div>
                <div className="labor-card-desc">Asesoría en procedimientos y litigios administrativos.</div>
              </div>
            </Link>

                        <Link to="/derecho-familia" className="labor-card" style={{ '--bg': 'url(\'/img/ninofamilia.webp\')' }}>
              <div className="labor-card-content">
                <div className="labor-card-title"><span className="labor-dot"></span>Derecho de Familia</div>
                <div className="labor-card-desc">Trámites administrativos y judiciales de familia.</div>
              </div>
            </Link>
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
    
          function hideOverlay() {
            if (overlay) { overlay.classList.remove('is-active'); }
          }
          hideOverlay();
    
          window.addEventListener('pageshow', (e) => { if (e.persisted) hideOverlay(); });
          window.addEventListener('focus', hideOverlay);
          window.addEventListener('load', hideOverlay);
    
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

export default Derecho;

