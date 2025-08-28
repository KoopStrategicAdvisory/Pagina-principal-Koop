import React from 'react';
import html from '../html/derecho-penal.html?raw';

const DerechoPenal = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DerechoPenal;
