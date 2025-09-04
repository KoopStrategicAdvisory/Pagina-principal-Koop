import React from 'react';
import extractStylesFromHtml from '../utils/extractStylesFromHtml';
import pageHtml from '../../old/privacidad.html?raw';
import useNormalizeAssets from '../hooks/useNormalizeAssets';
import useMenu from '../hooks/useMenu';
import usePageTransition from '../hooks/usePageTransition';
import { Link } from 'react-router-dom';

const Privacidad = () => {
  useMenu();
  usePageTransition();
  const pageCss = extractStylesFromHtml(pageHtml)
    .replace(/url\(\s*(['"]?)img\//gi, 'url($1/img/');
  useNormalizeAssets();
  return (
  <>
    <style>{pageCss}</style>
    <div className="page-transition"></div>
      
      <main>
        <h1>Política de Privacidad</h1>
        <p>Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente.</p>
      </main>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">© <span id="year"></span> Creado por Koop Strategic Advisory</div>
          <div className="footer-right"><a href="/privacidad">Política de Privacidad</a></div>
        </div>
      </footer>
      {/*
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
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
        (function () {
          const overlay = document.querySelector('.page-transition');
          function hideOverlay() { if (overlay) { overlay.classList.remove('is-active'); } }
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

export default Privacidad;

