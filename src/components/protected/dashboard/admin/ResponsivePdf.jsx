import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Visualizador de PDF con tratamiento especifico para moviles.
 * - Movil: no embebe PDF; muestra mensaje + boton para abrir en una nueva pestana.
 * - Escritorio: intenta <object type="application/pdf"> con iframe de respaldo.
 * - Incluye controles para maximizar/minimizar el visor.
 */
export default function ResponsivePdf({ src, heightDesktop = 560, heightMobile = 480, className }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const prevBodyOverflow = useRef(null);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(max-width: 768px)");
      const listener = (e) => {
        setIsMobile(e.matches);
        if (e.matches) {
          setIsFullscreen(false);
        }
      };
      setIsMobile(mq.matches);
      if (mq.matches) {
        setIsFullscreen(false);
      }
      if (mq.addEventListener) mq.addEventListener("change", listener);
      else if (mq.addListener) mq.addListener(listener);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", listener);
        else if (mq.removeListener) mq.removeListener(listener);
      };
    } catch {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (!isFullscreen) {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      }
      return;
    }

    if (prevBodyOverflow.current === null) {
      prevBodyOverflow.current = document.body.style.overflow || "";
    }
    document.body.style.overflow = "hidden";

    return () => {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      } else {
        document.body.style.overflow = "";
      }
    };
  }, [isFullscreen]);

  const absUrl = useMemo(() => {
    try {
      return new URL(src, window.location.origin).toString();
    } catch {
      return src;
    }
  }, [src]);

  const toggleFullscreen = () => setIsFullscreen((prev) => !prev);

  const mobileCopy = [
    "Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.",
    "",
    "Desde alli podras:",
    "- Consultar el estado de tus procesos en tiempo real.",
    "- Descargar documentos relevantes de manera segura.",
    "- Recibir notificaciones de audiencias y plazos importantes.",
    "- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.",
    "",
    "Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad.",
  ].join("\n");

  if (isMobile) {
    // Movil: ocupar altura del cuadro y alinear el boton abajo a la derecha
    return (
      <div className={className} style={{ width: "100%", height: heightMobile, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Gracias por elegirnos. Nos alegra iniciar este camino contigo.</div>
          <div className="muted" style={{ marginBottom: 12, whiteSpace: "pre-line" }}>{mobileCopy}</div>
        </div>
        <div style={{ marginTop: "auto", padding: 16, display: "flex", justifyContent: "flex-end" }}>
          <a className="btn btn-primary" href={absUrl} target="_blank" rel="noopener noreferrer">
            Cordial saludo
          </a>
        </div>
      </div>
    );
  }

  const containerStyle = isFullscreen
    ? {
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(6, 11, 25, 0.92)",
        padding: "48px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }
    : {
        width: "100%",
        height: heightDesktop,
        position: "relative",
      };

  const viewerWrapperStyle = isFullscreen
    ? { flex: 1, position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.45)" }
    : { width: "100%", height: "100%", position: "relative", borderRadius: 12, overflow: "hidden" };

  const buttonStyle = {
    position: "absolute",
    top: isFullscreen ? 24 : 12,
    right: isFullscreen ? 24 : 12,
    zIndex: 1001,
  };

  return (
    <div className={className} style={containerStyle}>
      <button type="button" className="btn btn-primary btn-sm" onClick={toggleFullscreen} style={buttonStyle}>
        {isFullscreen ? "Minimizar" : "Maximizar"}
      </button>
      <div style={viewerWrapperStyle}>
        <object data={src} type="application/pdf" width="100%" height="100%" style={{ width: "100%", height: "100%" }}>
          {/* Fallback a iframe nativo */}
          <iframe title="PDF" src={absUrl} style={{ width: "100%", height: "100%", border: 0 }} />
          <div style={{ padding: 16 }}>
            No se pudo mostrar el PDF. <a href={src} target="_blank" rel="noopener noreferrer">Abrir en nueva pestana</a>
          </div>
        </object>
      </div>
    </div>
  );
}
