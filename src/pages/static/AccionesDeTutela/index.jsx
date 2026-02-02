import React from 'react';
import extractStylesFromHtml from '../../../utils/extractStylesFromHtml';
import pageHtml from '../../../old/acciones-de-tutela.html?raw';
import useNormalizeAssets from '../../../hooks/useNormalizeAssets';
import useMenu from '../../../hooks/useMenu';
import usePageTransition from '../../../hooks/usePageTransition';
import { Link } from 'react-router-dom';

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
    
      {/* SECCIÓN CARDS */}
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
    
      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-divider" aria-hidden="true"></div>
    
        <div className="footer-top">
          {/* Columna Marca + CTA */}
          <div className="footer-brand">
            <div className="footer-logo">
              {/* Logo gráfico eliminado; solo texto */}
              <div className="brand-text">KOOP STRATEGIC ADVISORY</div>
            </div>
            <p className="footer-copy">
              Estudio jurídico & contable. Continuidad y eficiencia para tu legado.
            </p>
            <div className="footer-cta">
              <h4>¿Necesitas una asesoría en Asesoría?</h4>
              <div className="btns">
                <a className="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">
                  {/* Ícono WhatsApp (22px) */}
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>
                  </svg>
                  WhatsApp
                </a>
                <a className="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop">
                  {/* ícono mail (22px) */}
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>
                  Escríbenos
                </a>
              </div>
            </div>
          </div>
    
          {/* Enlaces rápidos */}
          <div className="footer-col">
            <h5>Enlaces rápidos</h5>
            <ul className="footer-list">
              <li><Link to="/#inicio">Inicio</Link></li>
              <li><Link to="/#areas">Áreas de práctica</Link></li>
              <li><Link to="/#vision">Nuestra visión</Link></li>
              <li><Link to="/#contacto">Contacto</Link></li>
            </ul>
          </div>
    
          {/* Servicios de Familia */}
          <div className="footer-col">
            <h5>Servicios Notariales</h5>
            <ul className="footer-list">
              <li><a href="#peticion">Derecho de petición</a></li>
              <li><a href="#salud">Tutela en salud</a></li>
              <li><a href="#revocatoria">Revocatoria a decisiones judiciales</a></li>
              <li><a href="#tutelapension">Tutela para obtener pensión</a></li>
            </ul>
          </div>
    
          {/* Contacto + Redes */}
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
              {/* Instagram */}
              <a aria-label="Instagram" href="https://www.instagram.com/kooplawyers/" target="_blank" rel="noopener" title="Instagram">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>
                </svg>
              </a>
              {/* TikTok */}
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
              <a href="/privacidad">Política de privacidad</a>
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

export default AccionesDeTutela;

