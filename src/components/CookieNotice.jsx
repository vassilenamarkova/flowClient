import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

const TEXT = {
  EN: {
    message: 'We use cookies from Google Maps and Instagram to enhance your experience.',
    accept: 'Accept',
    decline: 'Decline',
  },
  BG: {
    message: 'Използваме бисквитки от Google Maps и Instagram за по-добро изживяване.',
    accept: 'Приемам',
    decline: 'Отказвам',
  },
};

export default function CookieNotice() {
  const { lang } = useLang();
  const t = TEXT[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('flow-cookies');
    if (!choice) setVisible(true);
  }, []);

  const handle = (choice) => {
    localStorage.setItem('flow-cookies', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie">
      <p className="cookie__text">{t.message}</p>
      <div className="cookie__actions">
        <button className="cookie__btn cookie__btn--accept" onClick={() => handle('accepted')}>
          {t.accept}
        </button>
        <button className="cookie__btn cookie__btn--decline" onClick={() => handle('declined')}>
          {t.decline}
        </button>
      </div>
    </div>
  );
}
