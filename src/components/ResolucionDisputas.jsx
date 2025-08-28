import React from 'react';
import html from '../html/resolucion-disputas.html?raw';

const ResolucionDisputas = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default ResolucionDisputas;
