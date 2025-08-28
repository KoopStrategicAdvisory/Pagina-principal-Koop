import React from 'react';
import html from '../html/derecho-familia.html?raw';

const DerechoFamilia = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DerechoFamilia;
