import { useEffect } from 'react';

export default function useSplash() {
  useEffect(() => {
    const splash = document.getElementById('splash');
    const logo = document.getElementById('splashLogo');
    const app = document.getElementById('app');

    const skip = document.documentElement.classList.contains('skip-splash');
    if (skip) {
      try { splash && splash.remove(); } catch (_) {}
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
        if (splash) splash.classList.add('splash--hide');
        setTimeout(() => {
          try { splash && splash.remove(); } catch (_) {}
          fadeInApp();
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
        try { splash && splash.remove(); } catch (_) {}
        if (app) { app.style.opacity = '1'; }
      }
    };
    window.addEventListener('pageshow', onPageShow);

    start();

    const killId = setTimeout(() => {
      const s = document.getElementById('splash');
      if (s && document.body.contains(s)) {
        s.classList.add('splash--hide');
        setTimeout(() => { try { s.remove(); } catch (_) {} fadeInApp(); }, 800);
      }
    }, 7000);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      clearTimeout(killId);
    };
  }, []);
}

