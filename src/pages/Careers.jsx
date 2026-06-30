import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import lady from '../assets/lady.svg';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';

export default function Careers() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <main className="careers">
      <div className="careers__hero">
        <div className="careers__text">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {tr.careers}
          </p>
          <div className="careers__body">{tr.careerBody}</div>
        </div>

        <div className="careers__bg-title" aria-hidden="true">{tr.hiring}</div>

        <img src={lady} alt="Barista illustration" className="careers__lady" />
      </div>

      <div className="careers__triptych">
        <img src={im1} alt="Flow Coffee" />
        <img src={im2} alt="Flow Coffee" />
        <img src={im3} alt="Flow Coffee" />
      </div>

      <p className="careers__credit">{tr.rights}</p>
    </main>
  );
}
