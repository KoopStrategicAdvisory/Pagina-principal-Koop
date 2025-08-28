import { useEffect } from 'react';

export default function useCardsCarousel() {
  useEffect(() => {
    const cards = document.querySelectorAll('.labor-card[data-images]');
    const intervalIds = [];

    cards.forEach((card) => {
      const list = (card.dataset.images || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (list.length < 2) return;

      let idx = 0;
      const id = setInterval(() => {
        const next = (idx + 1) % list.length;
        const overlayEl = document.createElement('div');
        overlayEl.className = 'labor-card-fade';
        overlayEl.style.backgroundImage = `url('${list[next]}')`;
        card.appendChild(overlayEl);
        requestAnimationFrame(() => { overlayEl.style.opacity = '1'; });
        setTimeout(() => {
          card.style.setProperty('--bg', `url('${list[next]}')`);
          try { overlayEl.remove(); } catch (_) {}
          idx = next;
        }, 1000);
      }, 3000);

      intervalIds.push(id);
    });

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
      document.querySelectorAll('.labor-card-fade').forEach((el) => {
        try { el.remove(); } catch (_) {}
      });
    };
  }, []);
}

