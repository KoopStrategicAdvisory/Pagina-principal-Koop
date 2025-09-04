import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import logo from '../Images/Koop Logo.png';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await register(form.name, form.email, form.password);
      if (res.ok) {
        setResult(res.data || { ok: true });
        navigate('/dashboard');
      } else {
        setError(res.error || 'Error en registro');
      }
    } catch (err) {
      const msg = err?.message || 'Error en registro';
      setError(msg);
      setResult({ error: true, message: msg });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="auth-page">
      <video
        className="auth-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/KoopCentroInternacional.mp4" type="video/mp4" />
      </video>
      <div className="auth-bg-overlay" />

      <div className="auth-card">
        <img src={logo} alt="Logo KOOP" className="logo" />
        <h2>Crear Cuenta</h2>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Creando...' : 'Registrarme'}
          </button>
        </form>

        {/* Resultado del stub para depuración */}
        {result && (
          <pre style={{
            textAlign: 'left',
            marginTop: 12,
            padding: 12,
            background: 'rgba(36, 52, 71, 0.6)',
            border: '1px solid rgba(57,75,97,0.5)',
            borderRadius: 8,
            maxHeight: 180,
            overflow: 'auto',
            fontSize: 12,
            color: '#e6f1ff'
          }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}

        <div className="auth-actions">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}
