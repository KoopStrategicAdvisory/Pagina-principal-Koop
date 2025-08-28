import React from 'react';
import html from '../html/derecho-administrativo.html?raw';

const DerechoAdministrativo = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DerechoAdministrativo;
