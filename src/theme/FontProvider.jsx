import { useEffect } from 'react';

export default function FontProvider({ base = "'Montserrat', Arial, sans-serif", heading, accent, children }) {
  useEffect(() => {
    const root = document.documentElement;
    if (base) root.style.setProperty('--ff-base', base);
    if (heading) root.style.setProperty('--ff-heading', heading);
    if (accent) root.style.setProperty('--ff-accent', accent);
  }, [base, heading, accent]);

  return children || null;
}

