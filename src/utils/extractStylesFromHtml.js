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
  return combined
    .replace(/url\(\s*(['\"]?)img\//gi, 'url($1/img/')
    .replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))/gi, 'url($1/$2)');
}
