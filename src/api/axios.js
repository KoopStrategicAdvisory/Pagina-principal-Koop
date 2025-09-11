import axios from "axios";
const BASE = import.meta.env?.VITE_API_BASE || "/api";

const api = axios.create({
  baseURL: BASE, // se apoya en el proxy de Vite
  withCredentials: true, // habilita envío/recepción de cookies
});

// Instancia sin interceptores para refresh
const apiBare = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers = [];

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRefreshed(newToken) {
  refreshSubscribers.forEach((cb) => {
    try { cb(newToken); } catch {}
  });
  refreshSubscribers = [];
}

export function setupAxiosInterceptors({ getAccessToken, setAccessToken, onLogout }) {
  // Request: agrega Authorization si hay token
  api.interceptors.request.use((config) => {
    try {
      let token = undefined;
      try { token = getAccessToken?.(); } catch {}
      // Fallback para evitar cierres obsoletos: leer de localStorage si no hay token en memoria
      if (!token && typeof window !== 'undefined') {
        try { token = window.localStorage?.getItem('accessToken'); } catch {}
      }
      if (token && !config.headers?.Authorization) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch {}
    return config;
  });

  // Response: maneja 401 con refresh single-flight
  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { response, config } = error || {};
      const status = response?.status;
      const originalRequest = config || {};

      // No reintentar para estas rutas o si ya reintentamos
      const url = String(originalRequest?.url || "");
      const isAuthRoute = url.includes("/auth/login") || url.includes("/auth/register") || url.includes("/auth/refresh");

      if (status !== 401 || isAuthRoute || originalRequest._retry) {
        return Promise.reject(error);
      }

      // Marca para evitar loops
      originalRequest._retry = true;

      // Si ya hay un refresh en curso, espera y reintenta
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((newToken) => {
            try {
              originalRequest.headers = originalRequest.headers || {};
              if (newToken) originalRequest.headers.Authorization = `Bearer ${newToken}`;
              resolve(api(originalRequest));
            } catch (e) {
              reject(e);
            }
          });
        });
      }

      // Lanzar refresh
      isRefreshing = true;
      try {
        const resp = await apiBare.post('/auth/refresh');
        const newToken = resp?.data?.accessToken;
        if (!newToken) throw new Error('No accessToken in refresh');
        try { setAccessToken?.(newToken); } catch {}
        onRefreshed(newToken);
        // Reintenta original con nuevo token
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (e) {
        // Evitar cerrar sesión por errores transitorios de red
        const status = e?.response?.status;
        if (status === 401 || status === 403) {
          try { await onLogout?.(); } catch {}
        }
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }
  );
}

export default api;
