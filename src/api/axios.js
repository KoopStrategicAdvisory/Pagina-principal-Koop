import axios from "axios";
const BASE = import.meta.env?.VITE_API_BASE || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

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
  api.interceptors.request.use((config) => {
    try {
      let token = undefined;
      try { token = getAccessToken?.(); } catch {}
      if (!token && typeof window !== 'undefined') {
        try { token = window.localStorage?.getItem('accessToken'); } catch {}
      }
      if (token && !config.headers?.Authorization) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.error('[axios] Request interceptor error:', e);
    }
    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { response, config } = error || {};
      const status = response?.status;
      const originalRequest = config || {};

      const url = String(originalRequest?.url || "");
      const isAuthRoute = url.includes("/auth/login") || url.includes("/auth/register") || url.includes("/auth/refresh");

      if (status !== 401 || isAuthRoute || originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

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

      isRefreshing = true;
      try {
        const resp = await apiBare.post('/auth/refresh');
        const newToken = resp?.data?.accessToken;
        if (!newToken) throw new Error('No accessToken in refresh');
        try { setAccessToken?.(newToken); } catch {}
        onRefreshed(newToken);
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (e) {
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
