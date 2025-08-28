import { useEffect } from 'react';

export default function useNormalizeAssets() {
  useEffect(() => {
    const normalizeUrl = (v) => {
      if (!v || typeof v !== 'string') return v;
      return v
        .replace(/url\(\s*'img\//gi, "url('/img/")
        .replace(/url\(\s*"img\//gi, 'url("/img/')
        .replace(/url\(\s*img\//gi, 'url(/img/');
    };

    // Fix CSS variable --bg inline usages
    document.querySelectorAll('[style]').forEach((el) => {
      try {
        const current = el.style.getPropertyValue('--bg');
        if (current && /url\(/i.test(current)) {
          const next = normalizeUrl(current);
          if (next !== current) el.style.setProperty('--bg', next);
        }
      } catch (_) {}
    });

    // Fix data-images lists
    document.querySelectorAll('[data-images]').forEach((el) => {
      const val = el.getAttribute('data-images');
      if (!val) return;
      const parts = val
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((p) => p.replace(/^img\//i, '/img/'));
      const next = parts.join(',');
      if (next !== val) el.setAttribute('data-images', next);
    });
  }, []);
}

