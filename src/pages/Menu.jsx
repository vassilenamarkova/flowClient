import '@google/model-viewer';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

const MENU = {
  EN: [
    {
      category: 'Summer Menu',
      special: true,
      items: [
        { name: 'Blueberry Pancake Latte', price: '€4.5 / 8.8 лв' },
        { name: 'Mango Matcha Latte',      price: '€4.5 / 8.8 лв' },
        { name: 'Hibiscus Creamy Lemonade',price: '€4.2 / 8.21 лв' },
        { name: 'Mont Blanc',              price: '€4.5 / 8.8 лв' },
      ],
    },
    {
      category: 'Hot Drinks',
      cols: true,
      items: [
        { name: 'Espresso',              ml: '15/30/60', eur: '1.80', bgn: '3.50' },
        { name: 'Single Origin',         ml: '',         eur: '+0.60', bgn: '+1.20' },
        { name: 'Doppio',                ml: '50',       eur: '2.30', bgn: '4.50' },
        { name: 'Americano',             ml: '200/300',  eur: '2.30/2.80', bgn: '4.50/5.50' },
        { name: 'Macchiato',             ml: '50',       eur: '2.30', bgn: '4.50' },
        { name: 'Cappuccino',            ml: '200/300',  eur: '2.80/3.30', bgn: '5.50/6.50' },
        { name: 'Flat White',            ml: '200',      eur: '3.00', bgn: '6.00' },
        { name: 'Latte',                 ml: '300',      eur: '3.00', bgn: '6.00' },
        { name: 'Raf Coffee',            ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Matcha Latte',          ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Hot Chocolate',         ml: '300',      eur: '3.30', bgn: '6.50' },
        { name: 'Chai Latte',            ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Tea',                   ml: '300',      eur: '2.00', bgn: '3.90' },
        { name: 'V60',                   ml: '300',      eur: '3.50', bgn: '7.00' },
        { name: 'Plant milk',            ml: '',         eur: '+0.70', bgn: '+1.50' },
      ],
    },
    {
      category: 'Cold Drinks',
      cols: true,
      items: [
        { name: 'Freddo Espresso',        ml: '300', eur: '2.80', bgn: '5.50' },
        { name: 'Freddo Cappuccino',      ml: '350', eur: '3.30', bgn: '6.50' },
        { name: 'Iced Americano',         ml: '300', eur: '2.80', bgn: '5.50' },
        { name: 'Espresso Tonic',         ml: '300', eur: '3.30', bgn: '6.50' },
        { name: 'Oreo Latte',             ml: '350', eur: '4.10', bgn: '8.00' },
        { name: 'Iced Latte',             ml: '350', eur: '3.50', bgn: '7.00' },
        { name: 'Iced Matcha Latte',      ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Strawberry Matcha Latte',ml: '350', eur: '4.30', bgn: '8.50' },
        { name: 'Mocha / White Mocha',    ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Bumble',                 ml: '300', eur: '3.80', bgn: '7.50' },
        { name: 'Fresh Orange Juice',     ml: '300', eur: '3.30', bgn: '6.50' },
      ],
      note: '*Add-ons: milk 20ml €0.20/0.50лв · cream 10ml €0.50/1.00лв · syrup 10ml €0.60/1.20лв',
    },
    {
      category: 'Signature',
      cols: true,
      items: [
        { name: 'FLOW Latte',                        ml: '200', eur: '3.80', bgn: '7.50' },
        { name: 'Caramel / Lavender / Vanilla Latte',ml: '350', eur: '4.00', bgn: '7.90' },
        { name: 'Black Sesame Latte',                ml: '350', eur: '4.30', bgn: '8.50' },
        { name: 'Brownie Latte',                     ml: '350', eur: '3.80', bgn: '7.50' },
      ],
    },
    {
      category: 'Smoothies',
      cols: true,
      items: [
        { name: 'Blue — coconut milk, banana, maca, blue spirulina',  ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Pink — coconut milk, forest berries, maca, banana',  ml: '350', eur: '3.50', bgn: '7.00' },
      ],
    },
    {
      category: 'Lemonades',
      cols: true,
      items: [
        { name: 'Strawberry',    ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Mango',         ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Elderflower & Lime', ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Passionfruit',  ml: '300', eur: '3.00', bgn: '6.00' },
      ],
    },
  ],
  BG: [
    {
      category: 'Лятно меню',
      special: true,
      items: [
        { name: 'Blueberry Pancake Latte', price: '€4.5 / 8.8 лв' },
        { name: 'Mango Matcha Latte',      price: '€4.5 / 8.8 лв' },
        { name: 'Hibiscus Creamy Lemonade',price: '€4.2 / 8.21 лв' },
        { name: 'Mont Blanc',              price: '€4.5 / 8.8 лв' },
      ],
    },
    {
      category: 'Топли напитки',
      cols: true,
      items: [
        { name: 'Еспресо',           ml: '15/30/60', eur: '1.80', bgn: '3.50' },
        { name: 'Single Origin',     ml: '',         eur: '+0.60', bgn: '+1.20' },
        { name: 'Допио',             ml: '50',       eur: '2.30', bgn: '4.50' },
        { name: 'Американо',         ml: '200/300',  eur: '2.30/2.80', bgn: '4.50/5.50' },
        { name: 'Макиато',           ml: '50',       eur: '2.30', bgn: '4.50' },
        { name: 'Капучино',          ml: '200/300',  eur: '2.80/3.30', bgn: '5.50/6.50' },
        { name: 'Флет уайт',         ml: '200',      eur: '3.00', bgn: '6.00' },
        { name: 'Лате',              ml: '300',      eur: '3.00', bgn: '6.00' },
        { name: 'Раф кафе',          ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Матча лате',        ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Горещ шоколад',     ml: '300',      eur: '3.30', bgn: '6.50' },
        { name: 'Чай лате',          ml: '200/300',  eur: '3.00/3.50', bgn: '6.00/7.00' },
        { name: 'Чай',               ml: '300',      eur: '2.00', bgn: '3.90' },
        { name: 'V60',               ml: '300',      eur: '3.50', bgn: '7.00' },
        { name: 'Растително мляко',  ml: '',         eur: '+0.70', bgn: '+1.50' },
      ],
    },
    {
      category: 'Студени напитки',
      cols: true,
      items: [
        { name: 'Фредо еспресо',         ml: '300', eur: '2.80', bgn: '5.50' },
        { name: 'Фредо капучино',         ml: '350', eur: '3.30', bgn: '6.50' },
        { name: 'Айс американо',          ml: '300', eur: '2.80', bgn: '5.50' },
        { name: 'Еспресо тоник',          ml: '300', eur: '3.30', bgn: '6.50' },
        { name: 'Орео лате',              ml: '350', eur: '4.10', bgn: '8.00' },
        { name: 'Айс лате',               ml: '350', eur: '3.50', bgn: '7.00' },
        { name: 'Айс матча лате',         ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Strawberry matcha latte',ml: '350', eur: '4.30', bgn: '8.50' },
        { name: 'Мока / Бяла мока',       ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Бамбъл',                 ml: '300', eur: '3.80', bgn: '7.50' },
        { name: 'Фреш портокал',          ml: '300', eur: '3.30', bgn: '6.50' },
      ],
      note: '*Добавки: мляко 20мл €0.20/0.50лв · сметана 10мл €0.50/1.00лв · сироп 10мл €0.60/1.20лв',
    },
    {
      category: 'Авторски',
      cols: true,
      items: [
        { name: 'FLOW лате',                          ml: '200', eur: '3.80', bgn: '7.50' },
        { name: 'Лате карамел / лавандула / ванила',  ml: '350', eur: '4.00', bgn: '7.90' },
        { name: 'Лате черен сусам',                   ml: '350', eur: '4.30', bgn: '8.50' },
        { name: 'Брауни лате',                        ml: '350', eur: '3.80', bgn: '7.50' },
      ],
    },
    {
      category: 'Смути',
      cols: true,
      items: [
        { name: 'Синьо — кокосово мляко, банан, маке, синя спирулина', ml: '350', eur: '3.80', bgn: '7.50' },
        { name: 'Розово — кокосово мляко, горски плодове, маке, банан', ml: '350', eur: '3.50', bgn: '7.00' },
      ],
    },
    {
      category: 'Лимонади',
      cols: true,
      items: [
        { name: 'Ягода',       ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Манго',       ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Бъз и лайм', ml: '300', eur: '3.00', bgn: '6.00' },
        { name: 'Маракуя',    ml: '300', eur: '3.00', bgn: '6.00' },
      ],
    },
  ],
};

function MenuSection({ section }) {
  return (
    <div className={`menu-section${section.special ? ' menu-section--special' : ''}`}>
      <h2 className="menu-section__heading">{section.category}</h2>

      {section.cols ? (
        <table className="menu-table">
          <thead>
            <tr>
              <th></th>
              <th>ml</th>
              <th>€</th>
              <th>лв</th>
            </tr>
          </thead>
          <tbody>
            {section.items.map((item, i) => (
              <tr key={i}>
                <td className="menu-item__name">{item.name}</td>
                <td className="menu-item__ml">{item.ml}</td>
                <td className="menu-item__price">{item.eur}</td>
                <td className="menu-item__price">{item.bgn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="menu-section__list">
          {section.items.map((item, i) => (
            <li key={i} className="menu-item">
              <span className="menu-item__name">{item.name}</span>
              <span className="menu-item__price">{item.price}</span>
            </li>
          ))}
        </ul>
      )}

      {section.note && <p className="menu-section__note">{section.note}</p>}
    </div>
  );
}

export default function Menu() {
  const { lang } = useLang();
  const tr = t[lang];
  const sections = MENU[lang];

  return (
    <>
      <main className="menu-page">
        <div className="container" style={{ textAlign: 'right' }}>
          <h1 className="menu-page__title">{lang === 'EN' ? 'Our Menu' : 'Нашето меню'}</h1>
          <p className="section-label">{lang === 'EN' ? 'What we serve' : 'Какво предлагаме'}</p>
        </div>

        {/* 3-D drink showcase */}
        <div className="menu-models">
          {[
            { src: '/drink1.glb', label: lang === 'EN' ? 'Hibiscus Creamy Lemonade' : 'Хибискус кремова лимонада', orbit: '0deg 75deg 100m' },
            { src: '/drink2.glb', label: lang === 'EN' ? 'Oreo Matcha Latte' : 'Орео матча лате', orbit: '0deg 75deg 100m' },
            { src: '/drink3.glb', label: lang === 'EN' ? 'Hibiscus Lemonade' : 'Хибискус лимонада', orbit: '0deg 75deg 100m' },
          ].map(drink => (
            <div key={drink.src} className="menu-model">
              <model-viewer
                src={drink.src}
                alt={drink.label}
                auto-rotate
                camera-controls
                disable-zoom
                disable-tap
                interaction-prompt="none"
                camera-orbit={drink.orbit}
                environment-image="neutral"
                exposure="1.2"
              />
              <p className="menu-model__label">{drink.label}</p>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="menu-page__grid">
            {sections.map(s => <MenuSection key={s.category} section={s} />)}
          </div>
        </div>
      </main>
      <footer className="footer">
        <span className="footer__copy">{tr.rights}</span>
      </footer>
    </>
  );
}
