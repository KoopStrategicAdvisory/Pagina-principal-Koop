import { useMemo, useRef, useState } from 'react';
import api from '../../../../api/axios';

export default function AiChat({ title = 'Asistente IA', systemPrompt }) {
  const [messages, setMessages] = useState(() => []);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const viewportRef = useRef(null);

  const canSend = useMemo(() => input.trim().length > 0 && !sending, [input, sending]);

  const scrollToBottom = () => {
    try {
      const el = viewportRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setSending(true);
    setTimeout(scrollToBottom, 0);

    try {
      // Backend esperado: POST /ai/chat { messages: [{role, content}], system?: string }
      // Debe responder con { reply: string } o { choices: [{ message: { role, content } }] }
      const payload = {
        messages: [
          ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
          ...nextMessages,
        ],
      };
      const { data } = await api.post('/ai/chat', payload);
      const reply = data?.reply
        || data?.message?.content
        || data?.choices?.[0]?.message?.content
        || data?.choices?.[0]?.delta?.content
        || '';
      const assistantMsg = String(reply || '').trim() || 'Lo siento, no obtuve respuesta.';
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMsg }]);
      setTimeout(scrollToBottom, 0);
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || 'Error al consultar el asistente';
      setMessages((prev) => [...prev, { role: 'assistant', content: `⚠️ ${msg}` }]);
      setTimeout(scrollToBottom, 0);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (canSend) sendMessage();
    }
  };

  return (
    <div className="dash-item" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => setMessages([])}
          disabled={sending}
        >
          Limpiar
        </button>
      </div>

      <div
        ref={viewportRef}
        style={{
          background: '#0f172a',
          border: '1px solid rgba(148,163,184,0.25)',
          borderRadius: 12,
          padding: 10,
          minHeight: 180,
          maxHeight: 260,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {messages.length === 0 && (
          <div style={{ opacity: 0.7 }}>Haz una pregunta para comenzar…</div>
        )}
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                background: m.role === 'user' ? 'rgba(34,211,238,0.12)' : 'rgba(148,163,184,0.12)',
                border: '1px solid rgba(148,163,184,0.25)',
                color: '#e2e8f0',
                padding: '8px 10px',
                borderRadius: 12,
                whiteSpace: 'pre-wrap',
              }}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <textarea
          className="textarea"
          rows={3}
          placeholder="Escribe tu mensaje (Enter para enviar)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={sending}
        />
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setInput('')} disabled={sending}>Borrar</button>
          <button type="button" className="btn btn-primary" onClick={sendMessage} disabled={!canSend}>
            {sending ? 'Enviando…' : 'Enviar'}
          </button>
        </div>
      </div>

      {/* Nota: Implementar en el backend un endpoint POST /ai/chat que haga proxy a OpenAI con stream opcional. */}
    </div>
  );
}

