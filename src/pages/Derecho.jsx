import React from 'react';
import extractStylesFromHtml from '../utils/extractStylesFromHtml';
import pageHtml from '../../old/derecho.html?raw';
import useNormalizeAssets from '../hooks/useNormalizeAssets';
import useMenu from '../hooks/useMenu';
import usePageTransition from '../hooks/usePageTransition';
import { Link } from 'react-router-dom';
import imgDespido from '../Images/Despidoinjustificado.jpg';

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
    
      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-divider" aria-hidden="true"></div>
    
        <div className="footer-top">
          {/* Columna Marca + CTA */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-text">KOOP STRATEGIC ADVISORY</div>
            </div>
            <p className="footer-copy">
              Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.
            </p>
            <div className="footer-cta">
              <h4>¿Necesitas una asesoría laboral hoy?</h4>
              <div className="btns">
                <a className="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">
                  WhatsApp
                </a>
                <a className="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop">
                  Escríbenos
                </a>
              </div>
            </div>
          </div>
    
          <div className="footer-col">
            <h5>Enlaces rápidos</h5>
            <ul className="footer-list">
              <li><Link to="/#inicio">Inicio</Link></li>
              <li><Link to="/#areas">Áreas de práctica</Link></li>
              <li><Link to="/#vision">Nuestra visión</Link></li>
              <li><Link to="/#contacto">Contacto</Link></li>
            </ul>
          </div>
    
          <div className="footer-col">
            <h5>Áreas de Derecho</h5>
            <ul className="footer-list">
              <li><Link to="/derecho-penal">Derecho penal</Link></li>
              <li><Link to="/derecho-laboral">Derecho laboral</Link></li>
              <li><Link to="/tramites-notariales">Trámites notariales</Link></li>
              <li><Link to="/derecho-administrativo">Derecho administrativo</Link></li>
            </ul>
          </div>
    
          <div className="footer-col">
            <h5>Contacto</h5>
            <div className="footer-contact">
              <div className="item">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
                <span>Bogotá D.C., Colombia</span>
              </div>
              <div className="item">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>
                <span><a className="footer-list" style={{ color: '#cfe0ff', textDecoration: 'none' }} href="tel:+573137213878">+57 (313) 721 38 78</a></span>
              </div>
              <div className="item">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>
                <span><a className="footer-list" style={{ color: '#cfe0ff', textDecoration: 'none' }} href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>
              </div>
            </div>
    
            <div className="footer-social" aria-label="Redes sociales">
              <a aria-label="Instagram" href="https://www.instagram.com/kooplawyers/" target="_blank" rel="noopener" title="Instagram">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
                </svg>
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>
                </svg>
              </a>
              <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    
        <div className="mini-footer">
          <div className="wrap">
            <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>
            <div className="mini-links">
              <Link to="/privacidad">Política de privacidad</Link>
              <a href="terminos.html">Términos y condiciones</a>
              <a href="#inicio">Volver arriba ↑</a>
            </div>
          </div>
        </div>
      </footer>
    
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

