import React from 'react';
import html from '../html/contratacion-publica.html?raw';

const ContratacionPublica = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default ContratacionPublica;
