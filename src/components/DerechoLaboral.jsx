import React from 'react';
import html from '../html/derecho-laboral.html?raw';

const DerechoLaboral = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DerechoLaboral;
