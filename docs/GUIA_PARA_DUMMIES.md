# Guía para "dummies" (paso a paso)

Esta guía explica cómo cambiar cosas comunes sin romper nada.

## 1) Prender el proyecto en tu PC
- Instala Node.js 18 o superior
- Abre la carpeta del proyecto en tu editor (VS Code)
- En la terminal ejecuta: `npm install`
- Para ver el sitio: `npm run dev` y abre el enlace que aparece (ej.: http://localhost:5173)

## 2) Cambiar textos e imágenes del Home
- Archivo: `src/pages/Index.jsx`
- Busca los textos dentro de etiquetas como `<h1>...</h1>` o `<p>...</p>` y cámbialos.
- Imágenes: reemplaza los archivos en `public/img/` o en `src/Images/` por otros con el mismo nombre y extensión.

## 3) Editar el menú superior (Navbar)
- Archivo: `src/components/Navbar.jsx`
- Para agregar un enlace, añade una línea como: `\n  <Link to="/mi-ruta">Mi sección</Link>`
- Para eliminar, borra el `<Link>` correspondiente.
- El botón “CLIENTE KOOP” va a `/login`.

## 4) Cambiar el Dashboard
- Archivo: `src/components/protected/dashboard/admin/AdminDashboard.jsx`
- Estructura:
  - Acciones rápidas (botones de arriba)
  - KPIs (tarjetas con números)
  - Columna izquierda (PDF de bienvenida)
  - Columna derecha (ej.: "Facturas vencidas" y "Mensajes no leídos")
  - Documentos recientes (al final)
- Para ocultar/mostrar bloques, comenta o descomenta las líneas JSX correspondientes.

## 5) Colores y estilos
- Archivo principal de estilos del dashboard: `src/styles/dashboard.css`
- Para hacer el fondo más o menos transparente, cambia la propiedad `background`.
- Para cambiar colores de botones (primarios), edita `.btn-primary`.

## 6) Conectar al backend
- La URL base del backend se toma de `VITE_API_BASE`.
- Puedes crear un archivo `.env` con: `VITE_API_BASE=https://mi-backend.tld`.
- El manejo de sesión (login/refresh) está en `src/context/AuthContext.jsx` y `src/api/axios.js`.

## 7) Construir y publicar
- Build de producción: `npm run build`
- Vista previa local: `npm run preview`
- GitHub Pages (si está configurado): `npm run deploy`

## 8) Errores comunes
- "Página en blanco": revisa la consola del navegador (F12) por errores de JavaScript.
- "404 al recargar una ruta": asegúrate de que `public/404.html` existe (Vite/SPA), el script lo crea en el build.
- "No carga el backend": verifica `VITE_API_BASE` y que el servidor responda a `/ping`.

¡Listo! Con esto puedes hacer cambios básicos sin tocar lógica avanzada.


