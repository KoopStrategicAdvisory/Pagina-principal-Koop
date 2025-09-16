# KOOP Strategic Advisory â€” Frontend y Portal de Clientes

Este repositorio contiene la web principal (marketing) y el portal de clientes (dashboard) construidos con React + Vite.

## TecnologÃ­as

- React 18 y React Router 6
- Vite 5 (dev server y build)
- Axios (API HTTP con interceptores y refresh de token)
- CSS modular por secciones

## CÃ³mo ejecutar

1) Requisitos: Node.js 18+ y npm.
2) Instalar dependencias: `npm install`
3) Desarrollo: `npm run dev` (abre el sitio en http://localhost:5173)
4) Build producciÃ³n: `npm run build`
5) Preview local: `npm run preview`

Variable opcional:
- `VITE_API_BASE`: URL base del backend. Si no se define, se usa `/api` y se espera un proxy/config en el servidor.

## Estructura de carpetas

- `src/` â€” Sitio principal (pÃºblico): pÃ¡ginas de Ã¡reas de prÃ¡ctica, login/registro, etc.
  - `src/App.jsx` â€” Enrutador principal SPA. Define rutas pÃºblicas y protegidas.
  - `src/context/AuthContext.jsx` â€” Estado de autenticaciÃ³n (JWT) y helpers.
  - `src/api/axios.js` â€” Instancia Axios con interceptores y refresh de token.
  - `src/components/` â€” Componentes compartidos (por ejemplo, `Navbar.jsx`, `ProtectedRoute.jsx`).
  - `src/styles/` â€” Hojas de estilo CSS (navbar, dashboard, auth, overrides, etc.).
- `src/components/protected/` - Portal de clientes (dashboard y componentes asociados a rutas protegidas).
  - `src/components/protected/Dashboard.jsx` - Página principal del portal del cliente.
  - `src/components/protected/dashboard/` - Tarjetas KPI, documentos, mensajes, etc.
- `src/infraestructure/` - Utilidades compartidas (Firebase Storage y helpers del portal autenticado).
- `public/` â€” Assets estÃ¡ticos (imÃ¡genes, PDF, 404.html, etc.).
- `old/` â€” Versiones HTML antiguas mantenidas solo como referencia.
- `scripts/` â€” Utilidades de build (p. ej., `postbuild-404.js`).

## Flujo de autenticaciÃ³n (resumen para no tÃ©cnicos)

- Al iniciar sesiÃ³n, el backend devuelve un `accessToken` (JWT) que se guarda en `localStorage`.
- Axios agrega ese token a cada solicitud (`Authorization: Bearer ...`).
- Si el token expira y el backend responde 401, Axios intenta pedir un token nuevo a `/auth/refresh` y repite la solicitud original.
- Si el refresh tambiÃ©n falla (401/403), se cierra sesiÃ³n local.

Archivos clave: `src/context/AuthContext.jsx` y `src/api/axios.js`.

## Rutas importantes

- PÃºblicas: `/` (home), `/derecho`, `/contabilidad`, etc.
- AutenticaciÃ³n: `/login`, `/register`, `/logout`.
- Protegidas: `/dashboard`, `/mi-expediente`, `/mis-casos`, `/panel`.

`ProtectedRoute.jsx` envuelve cada ruta protegida y solo muestra el contenido si el usuario estÃ¡ autenticado.

## CÃ³mo cambiar el menÃº superior (Navbar)

Archivo: `src/components/Navbar.jsx`
- Busca las etiquetas `<Link to="/...">Texto</Link>` para agregar o quitar enlaces.
- El botÃ³n â€œCLIENTE KOOPâ€ lleva a `/login`.
- Cuando hay sesiÃ³n activa, aparece el menÃº de usuario con accesos a `Dashboard`, `Mi expediente`, `Mis casos` y `Cerrar sesiÃ³n`.

## CÃ³mo editar el Dashboard

Archivo: `src/components/protected/Dashboard.jsx`
- Acciones rÃ¡pidas: primer bloque con botÃ³n para â€œRadicar documentaciÃ³n inicialâ€ y enlace a â€œMi expedienteâ€.
- KPIs: tarjetas superiores (actualmente solo â€œCasos activosâ€).
- Columna izquierda: muestra un PDF de bienvenida.
- Columna derecha: contiene bloques como â€œFacturas vencidasâ€ (con botÃ³n â€œPagar facturaâ€) y â€œMensajes no leÃ­dosâ€.
- Documentos recientes: lista al final de la pÃ¡gina.

Estilos del dashboard en `src/styles/dashboard.css`.

## Estilos

- `src/styles/overrides.css` â€” Ajustes generales de estilos.
- `src/styles/navbar-*.css` â€” Estilos del menÃº superior.
- `src/styles/dashboard.css` â€” Paleta oscura y componentes del dashboard.
- `src/styles/auth.css` â€” Pantallas de login/registro.

## Despliegue (GitHub Pages)

- `npm run deploy` publica `dist/` en GitHub Pages (requiere permisos y configuraciÃ³n del repo remoto).

## GuÃ­a para â€œdummiesâ€: tareas comunes

1) Cambiar el logo: reemplaza `public/Koop Logo.png` por una imagen con el mismo nombre.
2) Cambiar un texto de una pÃ¡gina: abre el archivo en `src/pages/` correspondiente y edita el texto dentro del JSX.
3) Agregar un enlace en el menÃº: edita `src/components/Navbar.jsx` y agrega un `<Link to="/tu-ruta">Nombre</Link>`.
4) Modificar el botÃ³n â€œPagar facturaâ€: edita el bloque "Facturas vencidas" en `src/components/protected/Dashboard.jsx`.
5) Cambiar colores del dashboard: ajusta `src/styles/dashboard.css`.

Si necesitas mÃ¡s guÃ­a paso a paso, consulta `docs/GUIA_PARA_DUMMIES.md`.



