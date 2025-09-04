import { useEffect } from 'react';

export default function useMenu() {
  useEffect(() => {
    // Mantener solo el comportamiento del submenú de Áreas en móvil
    const areasToggle = document.getElementById('areas-toggle');
    const cleanups = [];

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

