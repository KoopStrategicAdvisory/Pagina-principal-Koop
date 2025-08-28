import React from 'react';
import html from '../html/insolvencia.html?raw';

const Insolvencia = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Insolvencia;
