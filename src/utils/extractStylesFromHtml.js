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
  return styles.join('\n\n');
}

