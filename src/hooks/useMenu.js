import { useEffect } from 'react';

export default function useMenu() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const areasToggle = document.getElementById('areas-toggle');

    const cleanups = [];

    if (menuToggle && navMenu) {
      const onToggle = () => navMenu.classList.toggle('open');
      menuToggle.addEventListener('click', onToggle);
      cleanups.push(() => menuToggle.removeEventListener('click', onToggle));

      const links = Array.from(navMenu.querySelectorAll('a'))
        .filter((l) => !l.classList.contains('drop-btn'));
      const onLinkClick = () => navMenu.classList.remove('open');
      links.forEach((l) => l.addEventListener('click', onLinkClick));
      cleanups.push(() => links.forEach((l) => l.removeEventListener('click', onLinkClick)));
    }

    if (areasToggle) {
      const onAreasClick = (e) => {
        e.preventDefault();
        if (areasToggle.parentElement) {
          areasToggle.parentElement.classList.toggle('open');
        }
      };
      areasToggle.addEventListener('click', onAreasClick);
      cleanups.push(() => areasToggle.removeEventListener('click', onAreasClick));
    }

    return () => {
      cleanups.forEach((fn) => {
        try { fn(); } catch (_) {}
      });
    };
  }, []);
}

