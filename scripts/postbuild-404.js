// Duplicate dist/index.html to dist/404.html so GitHub Pages serves
// the SPA shell on deep links (refresh on /ruta) without redirecting.
const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
const src = path.join(dist, 'index.html');
const dst = path.join(dist, '404.html');

try {
  const html = fs.readFileSync(src, 'utf8');
  fs.writeFileSync(dst, html, 'utf8');
  console.log('Created dist/404.html from index.html');
} catch (err) {
  console.error('postbuild-404 failed:', err.message);
  process.exit(0); // do not fail build
}

