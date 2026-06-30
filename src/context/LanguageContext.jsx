import { createContext, useContext, useState } from 'react';

const Ctx = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('flow-lang') || 'EN');

  const toggle = () =>
    setLang(prev => {
      const next = prev === 'EN' ? 'BG' : 'EN';
      localStorage.setItem('flow-lang', next);
      return next;
    });

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
