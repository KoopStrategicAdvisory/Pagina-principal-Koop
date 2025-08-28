import React from 'react';
import useMenu from '../hooks/useMenu';
import useSplash from '../hooks/useSplash';
import usePageTransition from '../hooks/usePageTransition';
import useCardsCarousel from '../hooks/useCardsCarousel';
import useNormalizeAssets from '../hooks/useNormalizeAssets';
import extractStylesFromHtml from '../utils/extractStylesFromHtml';
import pageHtml from '../../old/index.html?raw';

const Index = () => {
  useMenu();
  useSplash();
  usePageTransition();
  useCardsCarousel();
  const pageCss = extractStylesFromHtml(pageHtml)
    .replace(/url\(\s*(['\"]?)img\//gi, 'url($1/img/');
  useNormalizeAssets();

  return (
  <>
    <style>{pageCss}</style>
    {/* Overlay de transición (debajo del splash) */}
      <div className="page-transition" aria-hidden="true"></div>
    
      {/* ===== SPLASH ===== */}
      <div id="splash" className="splash" aria-hidden="true">
        <div className="splash__frame">
          {/* usa %20 por el espacio en el nombre */}
          <img id="splashLogo" className="splash__logo" src="/Koop%20Logo.png" alt="Koop Strategic Advisory" />
        </div>
      </div>
    
      {/* ===== CONTENIDO REAL ===== */}
      <div id="app">
        <nav className="navbar">
          <div className="navbar-content">
            <a href="index.html" className="logo">
              <img src="/Koop Logo.png" alt="Logo Koop" className="logo-img" />
              <div className="logo-text">KOOP STRATEGIC ADVISORY</div>
            </a>
            <div className="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>
            <div className="nav-menu" id="nav-menu">
              <a href="index.html#inicio">INICIO</a>
              <div className="dropdown">
                <a href="index.html#areas" className="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>
                <div className="dropdown-content">
                  <div className="dropdown-group">
                    <span className="dropdown-title">Derecho</span>
                    <a href="derecho-laboral.html">Derecho Laboral</a>
                    <a href="derecho-penal.html">Derecho Penal</a>
                    <a href="tramites-notariales.html">Trámites notariales</a>
                    <a href="derecho-administrativo.html">Derecho Administrativo</a>
                    <a href="derecho-familia.html">Derecho de Familia</a>
                    <a href="contratacion-publica.html">Contratación Pública</a>
                    <a href="resolucion-disputas.html">Resolución de Disputas</a>
                    <a href="acciones-de-tutela.html">Acciones de Tutela</a>
                    <a href="insolvencia.html">Insolvencia</a>
                  </div>
                  <div className="dropdown-group">
                    <span className="dropdown-title">Contabilidad</span>
                    <a href="contabilidad.html">Contabilidad</a>
                    <a href="auditoria.html">Auditoría</a>
                    <a href="impuestos.html">Impuestos</a>
                    <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>
                  </div>
                </div>
              </div>
              <a href="index.html#vision">NUESTRA VISIÓN</a>
              <a href="index.html#contacto">CONTACTO</a>
            </div>
          </div>
        </nav>
    
        <div className="hero-section" id="inicio">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-box">
              <div className="hero-title">Servicios Jurídicos y Contables <br /> de alta calidad</div>
              <div className="hero-subtitle">Especialistas en Ley Comercial,<br /> Litigación, Insolvencia y Acciones de Tutela</div>
              <div className="hero-desc">
                Equipo experto en derecho empresarial, penal y contable. <br />
                Brindamos consultoría estratégica para empresas y personas naturales.
              </div>
              <a href="#contacto"><button className="cta-btn">Solicita tu consulta</button></a>
            </div>
          </div>
        </div>
    
        {/* SECCIÓN ÁREAS DE PRÁCTICA */}
        <section className="areas-section" id="areas">
          <div className="areas-container">
            <div className="areas-title">
              <span className="areas-title-bold">ÁREAS DE</span> <span className="areas-title-normal">PRÁCTICA</span>
            </div>
            <div className="areas-cards">
              <a href="derecho.html" className="labor-card" style={{ '--bg': 'url(\'/img/paloquemao.png\')' }} data-images="/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png">
                <div className="labor-card-content">
                  <div className="labor-card-title">Derecho</div>
                  <div className="labor-card-btn">Ingresar</div>
                </div>
              </a>
              <a href="contabilidad.html" className="labor-card" style={{ '--bg': 'url(\'/img/auditoria.svg\')' }} data-images="/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg">
                <div className="labor-card-content">
                  <div className="labor-card-title">Contabilidad</div>
                  <div className="labor-card-btn">Ingresar</div>
                </div>
              </a>
            </div>
          </div>
        </section>
    
        {/* SECCIÓN NUESTRA VISIÓN */}
        <section className="vision-section" id="vision">
          <div className="vision-container">
            <h2 className="vision-title"><span className="vision-bold">NUESTRA</span> VISIÓN</h2>
            <div className="vision-text">
              <p>En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles.</p>
              <p>Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente.</p>
              <p>Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente.</p>
            </div>
          </div>
        </section>
    
        {/* SECCIÓN IMAGEN COMPLETA */}
        <section className="full-img-section">
          <img src="/Corte suprema de justicia de colombia.jpg" alt="Equipo empresarial Koop" className="full-img" />
        </section>
    
        {/* SECCIÓN CONTÁCTANOS MODERNA */}
        <section className="contact-section" id="contacto">
          <div className="contact-overlay"></div>
          <div className="contact-container contact-modern">
            <div className="contact-modern-content">
              <div className="contact-title" style={{ textAlign: 'center' }}>CONTÁCTANOS</div>
              <div className="contact-name" style={{ textAlign: 'center', color: '#fff' }}>KOOP STRATEGIC ADVISORY</div>
              <div className="contact-social contact-social-modern">
                <a href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" className="social-icon instagram" title="Instagram">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" className="social-icon facebook" title="Facebook">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://tiktok.com/" target="_blank" className="social-icon tiktok" title="TikTok">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok" />
                </a>
                <a href="https://wa.me/573503965755" target="_blank" className="social-icon whatsapp" title="WhatsApp">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" />
                </a>
              </div>
              <div className="contact-modern-text">Atendemos consultas por cualquiera de nuestras redes sociales.</div>
            </div>
          </div>
        </section>
    
        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-left">© 2024 Creado por Koop Strategic Advisory</div>
            <div className="footer-right">
              <a href="privacidad.html" target="_blank">Política de Privacidad</a>
            </div>
          </div>
        </footer>
      </div> {/* /#app */}
    
      {/*
        // ===== Menú móvil =====
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
    
    
        // ===== Splash + Fade in contenido (obedece la decisión del <head>) =====
        (function () {
          const splash = document.getElementById('splash');
          const logo   = document.getElementById('splashLogo');
          const app    = document.getElementById('app');
    
          // ¿Debemos saltar el splash?
          const skip = document.documentElement.classList.contains('skip-splash');
          if (skip) {
            try { splash && splash.remove(); } catch(e){}
            if (app) app.style.opacity = '1';
            return;
          }
    
          const MIN_VISIBLE_MS = 2500; // duración del fade-in del logo
          const FADE_MS = 800;         // fade-out del splash
          const t0 = performance.now();
    
          function revealLogo() {
            if (logo) { void logo.offsetWidth; logo.classList.add('is-visible'); }
          }
    
          function fadeInApp() {
            if (!app) return;
            app.style.opacity = '0';
            void app.offsetHeight;
    
            if (app.animate) {
              const anim = app.animate(
                [{ opacity: 0 }, { opacity: 1 }],
                { duration: 800, easing: 'ease', fill: 'forwards' }
              );
              anim.onfinish = () => { app.style.opacity = '1'; };
            } else {
              app.style.transition = 'opacity 0.8s ease';
              requestAnimationFrame(() => { app.style.opacity = '1'; });
            }
          }
    
          function hideSplashThenShowApp() {
            const elapsed = performance.now() - t0;
            const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
            setTimeout(() => {
              if (splash) splash.classList.add('splash--hide');
              setTimeout(() => {
                try { splash && splash.remove(); } catch(e){}
                fadeInApp();
              }, FADE_MS);
            }, wait);
          }
    
          async function start() {
            try {
              if (logo && 'decode' in logo) { await logo.decode(); }
              else if (logo && !logo.complete) {
                await new Promise(res => logo.addEventListener('load', res, { once: true }));
              }
            } catch(e) {}
    
            revealLogo();
            hideSplashThenShowApp();
          }
    
          // Volver desde caché del historial → no re-mostrar splash
          window.addEventListener('pageshow', (e) => {
            if (e.persisted) {
              try { splash && splash.remove(); } catch(e){}
              if (app) { app.style.opacity = '1'; }
            }
          });
    
          start();
    
          // Kill-switch por si algún evento no disparó
          setTimeout(() => {
            const s = document.getElementById('splash');
            if (s && document.body.contains(s)) {
              s.classList.add('splash--hide');
              setTimeout(() => { try { s.remove(); } catch(e){} fadeInApp(); }, 800);
            }
          }, 7000);
        })();
    
        // ===== Transición de salida hacia otras páginas internas =====
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
          
          function shouldIntercept(link) {
            // Ignora anclas, target=_blank, tel:, mailto:
            if (!link.href) return false;
            if (link.target && link.target.toLowerCase() === '_blank') return false;
            const href = link.getAttribute('href');
            if (!href) return false;
            if (href.startsWith('#')) return false;
            if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    
            const url = new URL(link.href, window.location.href);
            if (url.hostname !== window.location.hostname) return false; // externo
            // Si es misma página (misma ruta), no interceptar
            if (url.pathname === window.location.pathname && url.hash) return false;
            return true;
          }
    
          document.addEventListener('click', (e) => {
            const a = e.target.closest('a');
            if (!a || !shouldIntercept(a)) return;
    
            // Respeta modificadores (Cmd/Ctrl click abre nueva pestaña)
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    
            e.preventDefault();
            if (overlay) overlay.classList.add('is-active');
            setTimeout(() => { window.location.href = a.href; }, 600);
          });
        })();
    
        // ===== Carrusel de imágenes en áreas =====
        (function () {
          const cards = document.querySelectorAll('.labor-card[data-images]');
          cards.forEach(card => {
            const imgs = card.dataset.images.split(',').map(s => s.trim()).filter(Boolean);
            if (imgs.length < 2) return;
            let idx = 0;
            setInterval(() => {
              const next = (idx + 1) % imgs.length;
              const overlay = document.createElement('div');
              overlay.className = 'labor-card-fade';
              overlay.style.backgroundImage = `url('${imgs[next]}')`;
              card.appendChild(overlay);
              requestAnimationFrame(() => { overlay.style.opacity = '1'; });
              setTimeout(() => {
                card.style.setProperty('--bg', `url('${imgs[next]}')`);
                overlay.remove();
                idx = next;
              }, 1000);
            }, 3000);
          });
        })();
      */}
  </>
  );
};

export default Index;
