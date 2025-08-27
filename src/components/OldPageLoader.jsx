import React, { useEffect, useState } from 'react';

/**
 * Carga el HTML original desde la carpeta /old y lo inserta en el DOM.
 * @param {{ page: string }} props
 */
function OldPageLoader({ page }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/old/${page}.html`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('<p>No se pudo cargar el contenido.</p>'));
  }, [page]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default OldPageLoader;
