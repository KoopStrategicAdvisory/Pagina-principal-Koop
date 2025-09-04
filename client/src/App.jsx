import { useState } from "react";
import api from "./api/axios";

export default function App() {
  const [pong, setPong] = useState(null);

  const testPing = async () => {
    try {
      const { data } = await api.get("/ping");
      setPong(data);
    } catch (err) {
      console.error(err);
      setPong({ error: true, message: err?.message || "error" });
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Koop — Test API</h1>
      <button onClick={testPing}>Probar /api/ping</button>
      <pre>{JSON.stringify(pong, null, 2)}</pre>
    </div>
  );
}

