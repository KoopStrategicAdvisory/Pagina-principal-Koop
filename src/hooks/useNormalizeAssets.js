import { useEffect } from 'react';

export default function useNormalizeAssets() {
  useEffect(() => {
    const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';

    const ensureBasePrefixed = (url) => {
      try {
        if (!url || typeof url !== 'string') return url;
        if (/^(?:https?:)?\/\//i.test(url)) return url; // external or protocol-relative
        if (url.startsWith(BASE)) return url; // already prefixed
        if (url.startsWith('/')) {
          // prefix only common asset types
          if (/\.(?:png|jpe?g|svg|gif|webp|ico|mp4|webm|ogg|mp3|wav|pdf|ttf|woff2)(?:[?#].*)?$/i.test(url)) {
            return BASE.replace(/\/?$/, '/') + url.replace(/^\//, '');
          }
        }
      } catch (_) {}
      return url;
    };

    const normalizeUrl = (v) => {
      if (!v || typeof v !== 'string') return v;
      const withRoot = v
        .replace(/url\(\s*'img\//gi, "url('/img/")
        .replace(/url\(\s*\"img\//gi, 'url("/img/')
        .replace(/url\(\s*img\//gi, 'url(/img/')
        .replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico|mp4|webm|ogg|mp3|wav|ttf|woff2))\1\s*\)/gi,
          (m, q, p) => `url(${q}/${p}${q})`);
      return withRoot
        .replace(/url\(\s*(['\"]?)\/(img\/[^'"\)]*)\1\s*\)/gi, (m, q, p) => `url(${q}${BASE}${p}${q})`)
        .replace(/url\(\s*(['\"]?)\/([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico|mp4|webm|ogg|mp3|wav|ttf|woff2))\1\s*\)/gi,
          (m, q, p) => `url(${q}${BASE}${p}${q})`);
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
        .map((p) => ensureBasePrefixed(p.replace(/^img\//i, '/img/')));
      const next = parts.join(',');
      if (next !== val) el.setAttribute('data-images', next);
    });

    // Prefix base to src/href/poster for common asset elements
    const fixAttr = (el, attr) => {
      try {
        const val = el.getAttribute(attr);
        const next = ensureBasePrefixed(val);
        if (next && next !== val) el.setAttribute(attr, next);
      } catch (_) {}
    };

    document.querySelectorAll('img[src], source[src], video[src], audio[src], track[src], link[rel~="icon"][href], link[rel="apple-touch-icon"][href], link[rel="preload"][href]').forEach((el) => {
      fixAttr(el, el.hasAttribute('src') ? 'src' : 'href');
    });
    document.querySelectorAll('video[poster]').forEach((el) => fixAttr(el, 'poster'));
  }, [location.pathname, location.search, location.hash]);
}

