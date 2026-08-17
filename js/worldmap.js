/* Карты винных путешествий — ассеты из Figma (папка Resources).
   data-worldmap='{"w":463}'                 — карта мира,
   data-worldmap='{"w":1000,"map":"region"}' — карта регионов страны. */

const MAPS = {
  world:  'Resources/Карта мира.svg',
  region: 'Resources/Карта регион.svg',
};

function worldMap({ w = 1000, map = 'world' } = {}) {
  const src = MAPS[map] || MAPS.world;
  const alt = map === 'region' ? 'Карта регионов' : 'Карта мира';
  return `<img class="map-card__img" src="${encodeURI(src)}" width="${w}" alt="${alt}">`;
}

document.querySelectorAll('[data-worldmap]').forEach(el => {
  el.innerHTML = worldMap(el.dataset.worldmap ? JSON.parse(el.dataset.worldmap) : {});
});
