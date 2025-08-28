import React from 'react';
import html from '../html/impuestos.html?raw';

const Impuestos = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Impuestos;
