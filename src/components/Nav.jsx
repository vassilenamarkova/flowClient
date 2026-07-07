import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { useScrolled } from '../hooks/useScrolled';
import logo from '../assets/flowLogo.svg';
import logoSmall from '../assets/flowLogoSmall.svg';

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const tr = t[lang];
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCareers = location.pathname === '/careers';

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    if (!isHome) { window.location.href = `/#${id}`; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${isCareers ? ' nav--careers' : ''}`}>
      {/* Left links — desktop */}
      <div className="nav__seg nav__seg--left">
        <Link className="nav__link" to="/menu">{tr.home}</Link>
        <button className="nav__link" onClick={() => scrollTo('about')}>{tr.about}</button>
        <Link className="nav__link" to="/careers">{tr.careers}</Link>
        <button className="nav__link" onClick={() => scrollTo('contact')}>{tr.contacts}</button>
      </div>

      {/* Centre logo */}
      <Link to="/" className="nav__logo-wrap" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={scrolled ? logoSmall : logo} alt="FLOW Coffee" className="nav__logo" />
      </Link>

      {/* Right — BG + Order Now */}
      <div className="nav__seg nav__seg--right">
        <button className="nav__lang" onClick={toggle} aria-label="Toggle language">
          {lang === 'EN' ? 'БГ' : 'EN'}
        </button>
        <a
          href="https://www.takeaway.com/bg-en/menu/flow-coffee-and-pastrykafe-i-peciva-flou"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cta"
        >
          {tr.order}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`nav__burger${open ? ' open' : ''}`}
        onClick={() => setOpen(p => !p)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Mobile overlay */}
      <nav className={`nav__overlay${open ? ' open' : ''}`}>
        <Link className="nav__link" to="/menu">{tr.home}</Link>
        <button className="nav__link" onClick={() => scrollTo('about')}>{tr.about}</button>
        <Link className="nav__link" to="/careers">{tr.careers}</Link>
        <button className="nav__link" onClick={() => scrollTo('contact')}>{tr.contacts}</button>
        <a href="https://www.takeaway.com/bg-en/menu/flow-coffee-and-pastrykafe-i-peciva-flou" target="_blank" rel="noopener noreferrer" className="nav__link">{tr.order}</a>
        <button className="nav__lang" onClick={toggle}>{lang === 'EN' ? 'БГ' : 'EN'}</button>
      </nav>
    </header>
  );
}
