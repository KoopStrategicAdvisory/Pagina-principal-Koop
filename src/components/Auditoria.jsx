import React from 'react';
import html from '../html/auditoria.html?raw';

const Auditoria = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Auditoria;
