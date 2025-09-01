import { useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function usePageTransition() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map legacy .html paths to SPA routes
  const mapLegacy = (pathname) => {
    const base = '/' + (pathname || '').split('/').filter(Boolean).pop();
    const map = {
      '/index.html': '/',
      '/derecho.html': '/derecho',
      '/contabilidad.html': '/contabilidad',
      '/auditoria.html': '/auditoria',
      '/derecho-administrativo.html': '/derecho-administrativo',
      '/derecho-familia.html': '/derecho-familia',
      '/derecho-laboral.html': '/derecho-laboral',
      '/derecho-penal.html': '/derecho-penal',
      '/impuestos.html': '/impuestos',
      '/planeacion-patrimonial.html': '/planeacion-patrimonial',
      '/privacidad.html': '/privacidad',
      '/politica-privacidad.html': '/privacidad',
      '/tramites-notariales.html': '/tramites-notariales',
      '/acciones-de-tutela.html': '/acciones-de-tutela',
    };
    return map[pathname] || map[base] || pathname;
  };

  // Normalize anchors to SPA paths (same-origin only)
  const normalizeAnchors = () => {
    document.querySelectorAll('a[href]')?.forEach((a) => {
      try {
        const hrefAttr = a.getAttribute('href') || '';
        // external absolute links untouched
        if (/^https?:\/\//i.test(hrefAttr)) {
          const u = new URL(hrefAttr);
          if (u.origin !== window.location.origin) return;
        }

        const url = new URL(hrefAttr, window.location.href);
        if (url.origin !== window.location.origin) return;

        let next = mapLegacy(url.pathname) + url.search + url.hash;
        if (/^\/index\.html#/i.test(next)) {
          next = next.replace(/^\/index\.html#/i, '/#');
        }
        const current = a.getAttribute('href');
        if (next && next !== current) a.setAttribute('href', next);
      } catch (_) {}
    });
  };

  // Initial mount: hide any active overlay and intercept clicks
  useEffect(() => {
    const overlays = Array.from(document.querySelectorAll('.page-transition'));

    const hideOverlay = () => {
      overlays.forEach((ov) => ov.classList.remove('is-active'));
    };

    hideOverlay();
    requestAnimationFrame(hideOverlay);
    setTimeout(hideOverlay, 0);

    const onPageShow = (e) => { if (e.persisted) hideOverlay(); };
    const onFocus = () => hideOverlay();
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('focus', onFocus);

    function shouldIntercept(link) {
      if (!link || !link.href) return false;
      // Do not intercept the navbar dropdown toggle (mobile)
      try {
        const cls = link.classList;
        if ((cls && cls.contains('drop-btn')) || link.id === 'areas-toggle') return false;
      } catch (_) {}
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

    // Normalize anchors initially (so status bar shows the right URL)
    normalizeAnchors();

    const onDocClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      // Ignore navbar dropdown toggle explicitly
      if (a && ((a.classList && a.classList.contains('drop-btn')) || a.id === 'areas-toggle')) return;
      if (!a || !shouldIntercept(a)) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      const anyVisible = overlays.some((ov) => {
        try { return getComputedStyle(ov).display !== 'none'; } catch (_) { return false; }
      });
      if (anyVisible) overlays.forEach((ov) => ov.classList.add('is-active'));

      const run = () => {
        try {
          const url = new URL(a.href, window.location.href);
          const mapped = mapLegacy(url.pathname) + url.search + url.hash;
          const before = window.location.pathname + window.location.search + window.location.hash;
          try { window.__KOOP_FADE_ARRIVAL = true; } catch (_) {}
          try { navigate(mapped); } catch (_) {}
          setTimeout(() => {
            const now = window.location.pathname + window.location.search + window.location.hash;
            if (now === before) {
              window.location.assign(mapped);
            }
          }, 50);
        } catch (_) {
          window.location.assign(a.href);
        }
      };
      if (anyVisible) setTimeout(run, 600); else run();
    };

    // Use capture phase so we run before React Router's Link handlers
    document.addEventListener('click', onDocClick, true);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('click', onDocClick, true);
    };
  }, []);

  // Force scroll to top as early as possible on route change (no hash)
  useLayoutEffect(() => {
    if (!location.hash) {
      const toTop = () => {
        try { window.scrollTo(0, 0); } catch (_) {}
        try { document.documentElement.scrollTop = 0; } catch (_) {}
        try { document.body.scrollTop = 0; } catch (_) {}
      };
      toTop();
      requestAnimationFrame(toTop);
      setTimeout(toTop, 0);
      setTimeout(toTop, 50);
      setTimeout(toTop, 150);
    }
  }, [location.pathname, location.search, location.hash]);

  // After route changes: hide overlay, ensure content visible, optional fade-in
  useEffect(() => {
    Array.from(document.querySelectorAll('.page-transition')).forEach((ov) => ov.classList.remove('is-active'));
    const splash = document.getElementById('splash');
    const splashVisible = !!(splash && getComputedStyle(splash).display !== 'none' && !splash.classList.contains('splash--hide'));

    // If there is no splash on this page, ensure content is visible immediately
    if (!splashVisible) {
      document.documentElement.classList.add('skip-splash');
      const app = document.getElementById('app');
      if (app) {
        app.style.opacity = '1';
        app.style.transition = '';
      } else {
        document.body.style.opacity = '1';
      }
    }

    // Subtle arrival fade only when navigation came from an internal click
    const shouldFade = !splashVisible && !!(typeof window !== 'undefined' && window.__KOOP_FADE_ARRIVAL);
    if (shouldFade) {
      try {
        const doc = document.documentElement;
        doc.classList.remove('route-fade-in');
        void doc.offsetWidth; // reflow to restart animation
        doc.classList.add('route-fade-in');
        setTimeout(() => { try { doc.classList.remove('route-fade-in'); } catch (_) {} }, 280);
      } catch (_) {}
      try { window.__KOOP_FADE_ARRIVAL = false; } catch (_) {}
    }

    // Normalize anchors after navigation
    try { normalizeAnchors(); } catch (_) {}
  }, [location.pathname, location.search, location.hash]);
}
