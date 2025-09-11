# KOOP Strategic Advisory — Frontend y Portal de Clientes

Este repositorio contiene la web principal (marketing) y el portal de clientes (dashboard) construidos con React + Vite.

## Tecnologías

- React 18 y React Router 6
- Vite 5 (dev server y build)
- Axios (API HTTP con interceptores y refresh de token)
- CSS modular por secciones

## Cómo ejecutar

1) Requisitos: Node.js 18+ y npm.
2) Instalar dependencias: `npm install`
3) Desarrollo: `npm run dev` (abre el sitio en http://localhost:5173)
4) Build producción: `npm run build`
5) Preview local: `npm run preview`

Variable opcional:
- `VITE_API_BASE`: URL base del backend. Si no se define, se usa `/api` y se espera un proxy/config en el servidor.

## Estructura de carpetas

- `src/` — Sitio principal (público): páginas de áreas de práctica, login/registro, etc.
  - `src/App.jsx` — Enrutador principal SPA. Define rutas públicas y protegidas.
  - `src/context/AuthContext.jsx` — Estado de autenticación (JWT) y helpers.
  - `src/api/axios.js` — Instancia Axios con interceptores y refresh de token.
  - `src/components/` — Componentes compartidos (por ejemplo, `Navbar.jsx`, `ProtectedRoute.jsx`).
  - `src/styles/` — Hojas de estilo CSS (navbar, dashboard, auth, overrides, etc.).
- `client/` — Portal de clientes (sub-app): dashboard y componentes asociados.
  - `client/src/pages/Dashboard.jsx` — Página principal del portal del cliente.
  - `client/src/components/dashboard/` — Tarjetas KPI, documentos, mensajes, etc.
  - `client/src/api/axios.js` — Reexporta la instancia de `src/api/axios.js`.
- `public/` — Assets estáticos (imágenes, PDF, 404.html, etc.).
- `old/` — Versiones HTML antiguas mantenidas solo como referencia.
- `scripts/` — Utilidades de build (p. ej., `postbuild-404.js`).

## Flujo de autenticación (resumen para no técnicos)

- Al iniciar sesión, el backend devuelve un `accessToken` (JWT) que se guarda en `localStorage`.
- Axios agrega ese token a cada solicitud (`Authorization: Bearer ...`).
- Si el token expira y el backend responde 401, Axios intenta pedir un token nuevo a `/auth/refresh` y repite la solicitud original.
- Si el refresh también falla (401/403), se cierra sesión local.

Archivos clave: `src/context/AuthContext.jsx` y `src/api/axios.js`.

## Rutas importantes

- Públicas: `/` (home), `/derecho`, `/contabilidad`, etc.
- Autenticación: `/login`, `/register`, `/logout`.
- Protegidas: `/dashboard`, `/mi-expediente`, `/mis-casos`, `/panel`.

`ProtectedRoute.jsx` envuelve cada ruta protegida y solo muestra el contenido si el usuario está autenticado.

## Cómo cambiar el menú superior (Navbar)

Archivo: `src/components/Navbar.jsx`
- Busca las etiquetas `<Link to="/...">Texto</Link>` para agregar o quitar enlaces.
- El botón “CLIENTE KOOP” lleva a `/login`.
- Cuando hay sesión activa, aparece el menú de usuario con accesos a `Dashboard`, `Mi expediente`, `Mis casos` y `Cerrar sesión`.

## Cómo editar el Dashboard

Archivo: `client/src/pages/Dashboard.jsx`
- Acciones rápidas: primer bloque con botón para “Radicar documentación inicial” y enlace a “Mi expediente”.
- KPIs: tarjetas superiores (actualmente solo “Casos activos”).
- Columna izquierda: muestra un PDF de bienvenida.
- Columna derecha: contiene bloques como “Facturas vencidas” (con botón “Pagar factura”) y “Mensajes no leídos”.
- Documentos recientes: lista al final de la página.

Estilos del dashboard en `src/styles/dashboard.css`.

## Estilos

- `src/styles/overrides.css` — Ajustes generales de estilos.
- `src/styles/navbar-*.css` — Estilos del menú superior.
- `src/styles/dashboard.css` — Paleta oscura y componentes del dashboard.
- `src/styles/auth.css` — Pantallas de login/registro.

## Despliegue (GitHub Pages)

- `npm run deploy` publica `dist/` en GitHub Pages (requiere permisos y configuración del repo remoto).

## Guía para “dummies”: tareas comunes

1) Cambiar el logo: reemplaza `public/Koop Logo.png` por una imagen con el mismo nombre.
2) Cambiar un texto de una página: abre el archivo en `src/pages/` correspondiente y edita el texto dentro del JSX.
3) Agregar un enlace en el menú: edita `src/components/Navbar.jsx` y agrega un `<Link to="/tu-ruta">Nombre</Link>`.
4) Modificar el botón “Pagar factura”: edita el bloque "Facturas vencidas" en `client/src/pages/Dashboard.jsx`.
5) Cambiar colores del dashboard: ajusta `src/styles/dashboard.css`.

Si necesitas más guía paso a paso, consulta `docs/GUIA_PARA_DUMMIES.md`.

