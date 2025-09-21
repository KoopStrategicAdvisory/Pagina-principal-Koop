import React, { useEffect, useState } from 'react';

const PALETTES = {
  success: { bg: '#064e3b', fg: '#a7f3d0', border: 'rgba(16,185,129,0.35)' },
  danger: { bg: '#7f1d1d', fg: '#fecaca', border: 'rgba(248,113,113,0.35)' },
};

export function Notice({ kind = 'success', children, autoHideMs, onClose, style, className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // animate in
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!autoHideMs) return;
    const t = setTimeout(() => {
      setVisible(false);
      const t2 = setTimeout(() => onClose?.(), 220);
      return () => clearTimeout(t2);
    }, autoHideMs);
    return () => clearTimeout(t);
  }, [autoHideMs, onClose]);

  const pal = PALETTES[kind] || PALETTES.success;
  const baseStyle = {
    background: pal.bg,
    color: pal.fg,
    border: `1px solid ${pal.border}`,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    boxShadow: '0 6px 18px rgba(0,0,0,0.25) inset',
    transition: 'opacity 200ms ease, transform 200ms ease',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  };

  const close = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 200);
  };

  return (
    <div role="alert" className={className} style={{ ...baseStyle, ...(style || {}) }}>
      <div style={{ lineHeight: 1.4 }}>{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar aviso"
          style={{
            background: 'transparent',
            color: pal.fg,
            border: 'none',
            fontSize: 18,
            lineHeight: 1,
            cursor: 'pointer',
            padding: '2px 4px',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

export function SuccessNotice(props) {
  return <Notice kind="success" {...props} />;
}

export function DangerNotice(props) {
  return <Notice kind="danger" {...props} />;
}

