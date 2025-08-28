import React from 'react';
import html from '../html/tramites-notariales.html?raw';

const TramitesNotariales = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default TramitesNotariales;
