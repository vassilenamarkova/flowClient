import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import LazyIframe from '../components/LazyIframe';
import { t } from '../data/translations';
import ModelViewer from '../components/ModelViewer';
import Slideshow from '../components/Slideshow';
import PhotoStrip from '../components/PhotoStrip';
import Lottie from 'lottie-react';
import scrollAnim from '../scroll-down.json';

const HIGHLIGHT = { color: '#D64F82' };

function ContactHours({ lang }) {
  const day = new Date().getDay(); // 0=Sun, 1-5=Mon-Fri, 6=Sat
  const isWeekday = day >= 1 && day <= 5;

  if (lang === 'BG') return (
    <>
      <p style={{ marginBottom: '1.2rem', ...(isWeekday ? HIGHLIGHT : {}) }}>
        Понеделник – Петък<br />8:00 – 19:00
      </p>
      <p style={!isWeekday ? HIGHLIGHT : {}}>
        Събота – Неделя<br />9:00 – 19:00
      </p>
    </>
  );

  return (
    <>
      <p style={{ marginBottom: '1.2rem', ...(isWeekday ? HIGHLIGHT : {}) }}>
        Monday – Friday<br />8:00 am – 7:00 pm
      </p>
      <p style={!isWeekday ? HIGHLIGHT : {}}>
        Saturday – Sunday<br />9:00 am – 7:00 pm
      </p>
    </>
  );
}

export default function Home() {
  const { lang } = useLang();
  const bannerVideoRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    // React never reflects the JSX `muted` prop as an actual HTML attribute on
    // <video> (only as a JS property). Safari's autoplay permission check reads
    // the attribute, not just the property, so without setAttribute it silently
    // blocks playback until a user gesture even though `video.muted === true`.
    const video = bannerVideoRef.current;
    if (!video) return;
    video.setAttribute('muted', '');
    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    // Some Safari sessions still reject purely-programmatic autoplay (even muted)
    // with NotAllowedError until the page has been "engaged" at all — not
    // necessarily a tap on the video itself. Catch the first interaction of any
    // kind (scroll included) and use it to (re)start playback silently.
    const gestureEvents = ['scroll', 'touchstart', 'click', 'keydown'];
    const onFirstGesture = () => {
      tryPlay();
      gestureEvents.forEach(evt => window.removeEventListener(evt, onFirstGesture));
    };
    gestureEvents.forEach(evt => window.addEventListener(evt, onFirstGesture, { passive: true, once: true }));

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      gestureEvents.forEach(evt => window.removeEventListener(evt, onFirstGesture));
    };
  }, []);

  const tr = t[lang];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero" id="landing">
        {/* Ghost text behind everything */}
        <p className="hero__ghost hero__ghost--desktop" aria-hidden="true">
          <span>FLOW COFFEE</span>
          <span>FLOW COFFEE</span>
        </p>
        <p className="hero__ghost hero__ghost--mobile" aria-hidden="true">
          <span>FLOW</span>
          <span>COFFEE</span>
        </p>

        {/* 3-D cup — centred */}
        <div className="hero__model">
          <ModelViewer />
        </div>

        {/* Text — bottom right */}
        <div className="hero__copy">
          <p className="hero__eyebrow">{tr.eyebrow}</p>
          <h1 className="hero__headline">
            Where Good Coffee &amp; Good Energy <em>FLOW</em>
          </h1>
          <p className="hero__sub">
            Welcome to FLOW COFFEE — come for the coffee,<br />stay for the moment.
          </p>
        </div>

        {/* Scroll arrow — bottom left */}
        <div className="hero__cta-wrap">
          <div style={{ width: 28, height: 64 }}>
            <Lottie animationData={scrollAnim} loop />
          </div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <div id="home" className="banner">
        <video ref={bannerVideoRef} autoPlay muted loop playsInline className="banner__video">
          <source src="/mov1.mp4" type="video/mp4" />
        </video>
        <p className="banner__overlay-text" style={{ display: 'none' }}>new drinks</p>
        <Link to="/menu" className="banner__menu-btn">{tr.home}</Link>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="about__ghost" aria-hidden="true">{tr.aboutTitle}</div>
        <div className="about__ghost about__ghost--bottom" aria-hidden="true">{tr.aboutTitle}</div>
        <div className="container">
          <div className="about__inner">
            <div>
              <p className="section-label">{tr.aboutLabel}</p>
              <h2 className="about__title">{tr.aboutTitle}</h2>
              <div className="about__body">{tr.aboutBody}</div>
            </div>
            <Slideshow />
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <PhotoStrip />

      {/* ── DIVIDER ── */}
      <div className="divider">
        <p className="divider__text">{tr.more}</p>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact">
        <div className="contact__ghost" aria-hidden="true">{tr.contactsLabel}</div>
        <div className="contact__inner">
          <div className="contact__info">
            <h2 className="contact__title">{tr.contactsLabel}</h2>
            <div>
              <p className="contact__label">{tr.hoursLabel}</p>
              <div className="contact__hours"><ContactHours lang={lang} /></div>
            </div>
            <div>
              <p className="contact__label">{tr.findUs}</p>
              <div className="contact__links">
                <a href="tel:+359897331630" className="contact__link">
                  <img src="/phone.svg" alt="" aria-hidden="true" />
                  +359 897 331 630
                </a>
                <a href="https://www.instagram.com/flowcoffeesofia" target="_blank" rel="noopener noreferrer" className="contact__link">
                  <img src="/insta.svg" alt="" aria-hidden="true" />
                  @flowcoffeesofia
                </a>
                <a href="https://www.facebook.com/p/FLOW-Coffee-and-Pastry-100082981704930/" target="_blank" rel="noopener noreferrer" className="contact__link">
                  <img src="/facebook.svg" alt="" aria-hidden="true" />
                  @flowcoffee
                </a>
              </div>
              <a
                href="https://www.google.com/maps/place/FLOW+Coffee+and+Pastry/@42.7002383,23.3279669,18.72z"
                target="_blank" rel="noopener noreferrer"
                className="contact__map"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5z" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
                {tr.map}
              </a>
            </div>
          </div>
          <div className="contact__instagram-wrap">
            <div className="contact__instagram">
              <LazyIframe
                src="https://emb.fouita.com/widget/0x299ba2/ftul0hyub"
                title="Instagram Feed"
                width="800"
                height="646"
                scrolling="auto"
                frameBorder="0"
              />
            </div>
            <div className="contact__instagram-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="contact__map-embed">
          <LazyIframe
            title="Flow Coffee location"
            src="https://maps.google.com/maps?q=FLOW+Coffee+and+Pastry,+ul.+Budapeshta+26,+1202+Sofia,+Bulgaria&z=17&output=embed"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer__copy">{tr.rights}</span>
      </footer>
    </main>
  );
}
