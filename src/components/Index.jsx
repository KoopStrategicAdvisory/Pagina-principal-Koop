import React from 'react';
import html from '../html/index.html?raw';

const Index = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default Index;
