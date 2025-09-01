import { useEffect } from 'react';

export default function useSplash() {
  useEffect(() => {
    const splash = document.getElementById('splash');
    const logo = document.getElementById('splashLogo');
    const app = document.getElementById('app');

    // Nunca elimines nodos gestionados por React: solo escóndelos
    const hardHideSplash = () => {
      if (!splash) return;
      try {
        splash.classList.add('splash--hide');
        splash.setAttribute('aria-hidden', 'true');
        splash.style.display = 'none';
        splash.style.pointerEvents = 'none';
      } catch (_) {}
    };

    // Asegura visibilidad inicial del splash (por si quedó oculto entre navegaciones)
    try {
      if (splash) {
        splash.classList.remove('splash--hide');
        splash.removeAttribute('aria-hidden');
        splash.style.display = '';
        splash.style.pointerEvents = '';
      }
    } catch (_) {}

    // Saltar splash si ya se mostró en esta sesión o si el documento lo indica
    const visited = (() => { try { return sessionStorage.getItem('koop_hasVisited') === '1'; } catch (_) { return false; } })();
    const skip = visited || document.documentElement.classList.contains('skip-splash');
    if (skip) {
      hardHideSplash();
      if (app) app.style.opacity = '1';
      return undefined;
    }

    const MIN_VISIBLE_MS = 2500;
    const FADE_MS = 800;
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
        // Inicia el fade-in del contenido antes de ocultar el splash
        // para lograr un crossfade y evitar destello.
        fadeInApp();
        if (splash) splash.classList.add('splash--hide');
        setTimeout(() => {
          hardHideSplash();
          try { sessionStorage.setItem('koop_hasVisited', '1'); } catch (_) {}
          document.documentElement.classList.add('skip-splash');
        }, FADE_MS);
      }, wait);
    }

    async function start() {
      try {
        if (logo && 'decode' in logo) { await logo.decode(); }
        else if (logo && !logo.complete) {
          await new Promise((res) => logo.addEventListener('load', res, { once: true }));
        }
      } catch (_) {}

      revealLogo();
      hideSplashThenShowApp();
    }

    const onPageShow = (e) => {
      if (e.persisted) {
        hardHideSplash();
        if (app) { app.style.opacity = '1'; }
      }
    };
    window.addEventListener('pageshow', onPageShow);

    start();

    const killId = setTimeout(() => {
      const s = document.getElementById('splash');
      if (s && document.body.contains(s)) {
        try {
          s.classList.add('splash--hide');
          s.setAttribute('aria-hidden', 'true');
          s.style.display = 'none';
          s.style.pointerEvents = 'none';
        } catch (_) {}
        // No vuelvas a llamar a fadeInApp aquí para evitar un 2º fade.
      }
    }, 7000);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      clearTimeout(killId);
    };
  }, []);
}
