import React from 'react';
import html from '../html/privacidad.html?raw';

const Privacidad = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Privacidad;
