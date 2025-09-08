import React, { useEffect, useMemo, useState } from 'react';
import PdfCanvasViewer from './PdfCanvasViewer.jsx';

/**
 * Visualizador de PDF con tratamiento específico para móviles.
 * - En móviles usa Google Docs Viewer embebido para maximizar compatibilidad.
 * - En escritorio intenta mostrar el PDF nativo con <object>, con iframes/fallback.
 */
export default function ResponsivePdf({ src, heightDesktop = 560, heightMobile = 480, className }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      const mq = window.matchMedia('(max-width: 768px)');
      const listener = (e) => setIsMobile(e.matches);
      setIsMobile(mq.matches);
      if (mq.addEventListener) mq.addEventListener('change', listener);
      else if (mq.addListener) mq.addListener(listener);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', listener);
        else if (mq.removeListener) mq.removeListener(listener);
      };
    } catch {
      setIsMobile(false);
    }
  }, []);

  const absUrl = useMemo(() => {
    try { return new URL(src, window.location.origin).toString(); } catch { return src; }
  }, [src]);

  if (isMobile) {
    // En móvil, usemos un visor interno basado en pdf.js (sin depender de Google Docs Viewer)
    return (
      <div className={className} style={{ width: '100%' }}>
        <PdfCanvasViewer src={absUrl} initialScale={0.95} />
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: heightDesktop }}>
      <object data={src} type="application/pdf" width="100%" height="100%">
        {/* Fallback a iframe nativo */}
        <iframe title="PDF" src={absUrl} style={{ width: '100%', height: '100%', border: 0 }} />
        <div style={{ padding: 16 }}>
          No se pudo mostrar el PDF.{' '}
          <a href={src} target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña</a>
        </div>
      </object>
    </div>
  );
}
