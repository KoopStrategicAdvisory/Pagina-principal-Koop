import React from 'react';
import html from '../html/derecho.html?raw';

const Derecho = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Derecho;
