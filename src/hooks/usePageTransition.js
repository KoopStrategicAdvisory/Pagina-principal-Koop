import { useEffect } from 'react';

export default function usePageTransition() {
  useEffect(() => {
    const overlay = document.querySelector('.page-transition');

    const hideOverlay = () => {
      if (overlay) overlay.classList.remove('is-active');
    };

    // Hide immediately on mount
    hideOverlay();

    const onPageShow = (e) => { if (e.persisted) hideOverlay(); };
    const onFocus = () => hideOverlay();
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('focus', onFocus);

    function shouldIntercept(link) {
      if (!link || !link.href) return false;
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

    const onDocClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a || !shouldIntercept(a)) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      if (overlay) overlay.classList.add('is-active');
      setTimeout(() => { window.location.href = a.href; }, 600);
    };

    document.addEventListener('click', onDocClick);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('click', onDocClick);
    };
  }, []);
}

