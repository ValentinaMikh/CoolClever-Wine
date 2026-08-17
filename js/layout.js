/* Общие компоненты макета: шапка и подвал.
   Подключаются строкой <div data-layout="header"></div> и работают с file:// */

const HEADER = `
<header class="hdr">
  <div class="hdr__in">
    <div class="hdr__top">
      <div class="hdr__deliv">
        <i data-lucide="map-pin" class="i16" style="color:var(--express)"></i>
        <span class="fw5" style="color:var(--express)">Доставка</span>
        <span class="ellip">ул. Старых Производственников, 205</span>
        <span class="vr"></span>
        <span>Сегодня 14:00&nbsp;-&nbsp;16:00</span>
      </div>
      <nav class="hdr__links">
        <a href="#">Магазины</a>
        <a href="#">Вакансии</a>
        <a href="#">Аренда</a>
        <span class="vr"></span>
        <a href="#" class="row">Н. Новгород <i data-lucide="chevron-down" class="i16"></i></a>
      </nav>
    </div>

    <div class="hdr__act">
      <a class="logo" href="product.html" title="На главную">🍀</a>
      <a class="btn btn--somelie" href="#"><i data-lucide="layout-grid"></i>Каталог</a>
      <a class="btn btn--secondary" href="#"><i data-lucide="percent"></i>Акции</a>
      <label class="search">
        <i data-lucide="search" class="mut1"></i>
        <input placeholder="Бальзамический уксус">
      </label>
      <button class="btn btn--icon"><i data-lucide="heart"></i><span class="badge">24</span></button>
      <button class="btn"><i data-lucide="shopping-cart"></i>1 658 ₽<span class="badge">15</span></button>
      <a class="btn" href="travels.html"><i data-lucide="user"></i>Константин<span class="badge badge--dot"></span></a>
    </div>
  </div>
</header>`;

const F_COL2 = ['Каталог МясновЪ', 'Каталог Отдохни', 'Кухня Полли',
  'Менеджер для частных и корпоративных клиентов', 'Магазины', 'Торты на заказ', 'Аренда',
  'Акции и скидки', 'Личный кабинет', 'Доставка и самовывоз',
  'Мобильное приложение КуулКлевер', 'Карта сайта'];

const F_COL3 = ['О КуулКлевер', 'КуулКлевер Лайф', 'КуулКлевер книга', 'Контакты', 'Вакансии',
  'Правила онлайн-заказа', 'Правила программы лояльности',
  'Политика обработки персональных данных', 'Правила отбора контрагентов', 'Лицензия'];

const SOCIALS = [
  ['🍀', 'КуулКлевер'],
  ['🍷', 'Сомелье'],
  ['🥘', 'Кухня Полли'],
];

const li = (arr) => arr.map(t => `<li><a href="#">${t}</a></li>`).join('');

const FOOTER = `
<footer class="ftr">
  <div class="ftr__in">
    <div>
      <div class="row"><span class="logo">🍀</span><b>КуулКлевер</b></div>
      <div class="ftr__phone">8 831 461-91-91</div>
      <p class="p14 mut1">Поддержка клиентов с 08:00 до 22:00 ежедневно</p>
      <p class="p14 mut1" style="margin-top:8px">Доставка продуктов на дом в Москве, Нижнем Новгороде и области</p>
    </div>
    <ul>${li(F_COL2)}</ul>
    <ul>${li(F_COL3)}</ul>
    <div>
      <h4>Скачайте приложение</h4>
      <p class="p14 mut1">Будь в курсе наших новинок, акций и следи за программой лояльности</p>
      <div class="ftr__stores">
        <span class="ftr__store"><i data-lucide="apple" class="i18"></i>App&nbsp;Store</span>
        <span class="ftr__store"><i data-lucide="play" class="i18"></i>Google&nbsp;Play</span>
        <span class="ftr__store"><i data-lucide="smartphone" class="i18"></i>AppGallery</span>
      </div>
    </div>
  </div>
  <div class="ftr__bottom">
    <div class="ftr__bottom-in">
      <div class="ftr__soc">
        ${SOCIALS.map(([e, n]) => `<span class="ftr__soc-g"><span>${e}</span><b>${n}</b>
          <a href="#"><i data-lucide="send" class="i16"></i></a>
          <a href="#"><i data-lucide="message-circle" class="i16"></i></a>
          <a href="#"><i data-lucide="youtube" class="i16"></i></a></span>`).join('')}
      </div>
      <a href="#" class="row"><i data-lucide="message-square" class="i16"></i>Обратная связь</a>
    </div>
    <div class="ftr__bottom-in" style="border-top:1px solid var(--border)">
      <span>©2026 КуулКлевер. Сделано с любовью к покупателям</span>
      <a href="#" class="pink">Политика конфиденциальности</a>
      <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</span>
    </div>
  </div>
</footer>`;

/* ---- фото-ассеты из Figma (папка Resources) ---- */
const PHOTO = {
  inici:    'Resources/Винный погреб.png',   // Мерум Приорати Иниси, фон прозрачный
  iniciSq:  'Resources/Напитки топ 5.png',   // он же, квадратный кадр на белом фоне
  aimery:   'Resources/Бутылка география.png',
  barbera:  'Resources/2 место.png',
  bellevue: 'Resources/3 место.png',
  soave:    'Resources/4 место.png',
};

/* Фото бутылки по ключу из PHOTO; hex-значение рисует заглушку. */
function bottle(cls = 'bottle', label = '#7a1220') {
  const src = PHOTO[label];
  if (src) return `<img class="${cls}" src="${encodeURI(src)}" alt="" loading="lazy">`;
  return `<svg class="${cls}" viewBox="0 0 60 200" fill="none">
    <path d="M25 4h10v42c0 8 12 18 12 34v108a8 8 0 0 1-8 8H21a8 8 0 0 1-8-8V80c0-16 12-26 12-34V4Z"
          fill="${label}" stroke="rgba(0,0,0,.15)"/>
    <rect x="24" y="0" width="12" height="10" rx="2" fill="#2b2b2b"/>
    <rect x="14" y="104" width="32" height="52" rx="2" fill="#f4efe4"/>
    <rect x="19" y="118" width="22" height="3" rx="1.5" fill="#b9a37a"/>
    <rect x="21" y="127" width="18" height="2" rx="1" fill="#c9bda4"/>
  </svg>`;
}

/* ---- монтирование ---- */
document.querySelectorAll('[data-layout]').forEach(el => {
  el.outerHTML = el.dataset.layout === 'header' ? HEADER : FOOTER;
});
document.querySelectorAll('[data-bottle]').forEach(el => {
  el.innerHTML = bottle(el.dataset.bottleClass || 'bottle', el.dataset.bottle);
});
if (window.lucide) lucide.createIcons();
