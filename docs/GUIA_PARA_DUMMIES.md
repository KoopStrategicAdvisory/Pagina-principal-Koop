# GuÃ­a para "dummies" (paso a paso)

Esta guÃ­a explica cÃ³mo cambiar cosas comunes sin romper nada.

## 1) Prender el proyecto en tu PC
- Instala Node.js 18 o superior
- Abre la carpeta del proyecto en tu editor (VS Code)
- En la terminal ejecuta: `npm install`
- Para ver el sitio: `npm run dev` y abre el enlace que aparece (ej.: http://localhost:5173)

## 2) Cambiar textos e imÃ¡genes del Home
- Archivo: `src/pages/Index.jsx`
- Busca los textos dentro de etiquetas como `<h1>...</h1>` o `<p>...</p>` y cÃ¡mbialos.
- ImÃ¡genes: reemplaza los archivos en `public/img/` o en `src/Images/` por otros con el mismo nombre y extensiÃ³n.

## 3) Editar el menÃº superior (Navbar)
- Archivo: `src/components/Navbar.jsx`
- Para agregar un enlace, aÃ±ade una lÃ­nea como: `\n  <Link to="/mi-ruta">Mi secciÃ³n</Link>`
- Para eliminar, borra el `<Link>` correspondiente.
- El botÃ³n â€œCLIENTE KOOPâ€ va a `/login`.

## 4) Cambiar el Dashboard
- Archivo: `src/components/protected/Dashboard.jsx`
- Estructura:
  - Acciones rÃ¡pidas (botones de arriba)
  - KPIs (tarjetas con nÃºmeros)
  - Columna izquierda (PDF de bienvenida)
  - Columna derecha (ej.: "Facturas vencidas" y "Mensajes no leÃ­dos")
  - Documentos recientes (al final)
- Para ocultar/mostrar bloques, comenta o descomenta las lÃ­neas JSX correspondientes.

## 5) Colores y estilos
- Archivo principal de estilos del dashboard: `src/styles/dashboard.css`
- Para hacer el fondo mÃ¡s o menos transparente, cambia la propiedad `background`.
- Para cambiar colores de botones (primarios), edita `.btn-primary`.

## 6) Conectar al backend
- La URL base del backend se toma de `VITE_API_BASE`.
- Puedes crear un archivo `.env` con: `VITE_API_BASE=https://mi-backend.tld`.
- El manejo de sesiÃ³n (login/refresh) estÃ¡ en `src/context/AuthContext.jsx` y `src/api/axios.js`.

## 7) Construir y publicar
- Build de producciÃ³n: `npm run build`
- Vista previa local: `npm run preview`
- GitHub Pages (si estÃ¡ configurado): `npm run deploy`

## 8) Errores comunes
- "PÃ¡gina en blanco": revisa la consola del navegador (F12) por errores de JavaScript.
- "404 al recargar una ruta": asegÃºrate de que `public/404.html` existe (Vite/SPA), el script lo crea en el build.
- "No carga el backend": verifica `VITE_API_BASE` y que el servidor responda a `/ping`.

Â¡Listo! Con esto puedes hacer cambios bÃ¡sicos sin tocar lÃ³gica avanzada.


