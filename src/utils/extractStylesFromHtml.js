export default function extractStylesFromHtml(html) {
  if (!html || typeof html !== 'string') return '';
  // Remove <noscript> blocks entirely so their styles don't leak
  const withoutNoscript = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

  const styles = [];
  const re = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(withoutNoscript))) {
    const css = m[1] || '';
    if (!css.trim()) continue;
    styles.push(css.trim());
  }
  const combined = styles.join('\n\n');
  // Normalize asset URLs:
  // 1) url('img/...') -> url('/img/...')
  // 2) url('File.jpg') -> url('/File.jpg') for common image extensions
  // 1) Keep original closing ) and quotes intact
  // 2) Avoid duplicating closing ) by matching it and reconstructing
  const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  return combined
    // normalize relative img paths
    .replace(/url\(\s*(['\"]?)img\//gi, 'url($1/img/')
    // normalize bare filenames like url('File.jpg') => url('/File.jpg')
    .replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico|mp4|webm|ogg|mp3|wav|ttf|woff2))\1\s*\)/gi,
      (m, q, p) => `url(${q}/${p}${q})`)
    // prefix base for absolute-root urls in CSS so they work under GH Pages base
    .replace(/url\(\s*(['\"]?)\/(img\/[^'"\)]*)\1\s*\)/gi, (m, q, p) => `url(${q}${BASE}${p}${q})`)
    .replace(/url\(\s*(['\"]?)\/([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico|mp4|webm|ogg|mp3|wav|ttf|woff2))\1\s*\)/gi,
      (m, q, p) => `url(${q}${BASE}${p}${q})`);
}
