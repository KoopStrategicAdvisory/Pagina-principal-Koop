import React from 'react';
import html from '../html/acciones-de-tutela.html?raw';

const AccionesDeTutela = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default AccionesDeTutela;
