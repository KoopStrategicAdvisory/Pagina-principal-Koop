import React, { useEffect, useMemo, useState } from 'react';

/**
 * Visualizador de PDF con tratamiento específico para móviles.
 * - Móvil: no embebe PDF; muestra mensaje + botón para abrir en nueva pestaña.
 * - Escritorio: intenta <object type="application/pdf"> con iframe de respaldo.
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
    // Móvil: ocupar altura del cuadro y alinear el botón abajo a la derecha
    return (
      <div className={className} style={{ width: '100%', height: heightMobile, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>
            ¡Gracias por elegirnos! Nos alegra mucho iniciar este camino a tu lado.
          </div>
          <div className="muted" style={{ marginBottom: 12 }}>
            
Te compartimos que ya tienes acceso a nuestro Portal de 
Clientes Koop.
<br />
<br />
Desde allí podrás: 
• Consultar el estado de tus procesos en tiempo real. 
<br />
• Descargar documentos relevantes de manera segura. 
<br />
• Recibir notificaciones de audiencias y plazos importantes. 
<br />
• Comunicarse directamente con nuestro equipo para resolver 
cualquier inquietud. 
<br />
<br />
Estamos seguros de que esta alianza marcará un camino de 
crecimiento y tranquilidad.
          </div>
        </div>
        <div style={{ marginTop: 'auto', padding: 16, display: 'flex', justifyContent: 'flex-end' }}>
          <a className="btn btn-primary" href={absUrl} target="_blank" rel="noopener noreferrer">
            Cordial Saludo
          </a>
        </div>
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
