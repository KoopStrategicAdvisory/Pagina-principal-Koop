import React from 'react';

const baseInputStyle = {
  background: '#1b263b',
  color: '#e2e8f0',
  border: '1px solid rgba(148,163,184,0.35)',
  borderRadius: 8,
  padding: '8px 10px',
};

export function EditForm({ children, style }) {
  return <div style={{ display: 'grid', gap: 10, ...(style || {}) }}>{children}</div>;
}

export function EditRow({ children, cols = 2, style }) {
  return (
    <div style={{ display: 'grid', gap: 10, gridTemplateColumns: `repeat(${cols}, 1fr)`, ...(style || {}) }}>
      {children}
    </div>
  );
}

export function EditField({ label, type = 'text', value, onChange, placeholder, readOnly, inputProps, children }) {
  return (
    <label style={{ display: 'grid', gap: 6 }}>
      {label != null && <span>{label}</span>}
      {children ? (
        children
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          style={baseInputStyle}
          {...(inputProps || {})}
        />
      )}
    </label>
  );
}

export function EditTextArea({ label, value, onChange, rows = 3, placeholder, textareaProps }) {
  return (
    <label style={{ display: 'grid', gap: 6 }}>
      {label != null && <span>{label}</span>}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ ...baseInputStyle, resize: 'vertical' }}
        {...(textareaProps || {})}
      />
    </label>
  );
}

