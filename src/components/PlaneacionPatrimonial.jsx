import React from 'react';
import html from '../html/planeacion-patrimonial.html?raw';

const PlaneacionPatrimonial = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default PlaneacionPatrimonial;
