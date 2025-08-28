import React from 'react';
import html from '../html/contabilidad.html?raw';

const Contabilidad = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Contabilidad;
