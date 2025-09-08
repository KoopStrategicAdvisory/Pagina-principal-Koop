import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configurar worker de pdf.js para Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

export default function PdfCanvasViewer({ src, className, initialScale = 1.0, minScale = 0.6, maxScale = 2.0 }) {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(initialScale);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);
    setContainerWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const onLoadSuccess = ({ numPages: np }) => {
    setNumPages(np);
  };

  const pageWidth = useMemo(() => {
    if (!containerWidth) return undefined;
    // Ajuste para padding interno y zoom por escala
    const base = Math.max(100, Math.floor(containerWidth - 16));
    return Math.floor(base * scale);
  }, [containerWidth, scale]);

  const zoomIn = () => setScale((s) => Math.min(maxScale, Math.round((s + 0.1) * 10) / 10));
  const zoomOut = () => setScale((s) => Math.max(minScale, Math.round((s - 0.1) * 10) / 10));

  return (
    <div className={className} ref={containerRef} style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
        <div style={{ fontSize: 13, opacity: 0.9 }}>PDF</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" onClick={zoomOut} aria-label="Alejar">-</button>
          <button className="btn btn-secondary" onClick={zoomIn} aria-label="Acercar">+</button>
          <a className="btn btn-primary" href={src} target="_blank" rel="noopener noreferrer">Abrir</a>
        </div>
      </div>
      <div style={{ height: 1, background: '#394b61' }} />
      <div style={{ padding: 8 }}>
        <Document file={src} onLoadSuccess={onLoadSuccess} loading={<div style={{ padding: 16 }}>Cargando PDF…</div>}>
          {Array.from(new Array(numPages || 0), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              loading={<div style={{ padding: 8 }}>Cargando página {index + 1}…</div>}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
