/* Стилизованная точечная карта мира.
   Сетка 36x18 (шаг 10°), суша задана диапазонами колонок для каждой строки.
   Ассеты карты из Figma недоступны из окружения, поэтому карта собирается кодом. */

const LAND = {
  1: [[5, 15], [20, 35]],
  2: [[3, 15], [17, 35]],
  3: [[3, 11], [17, 35]],
  4: [[4, 11], [17, 35]],
  5: [[6, 11], [17, 35]],
  6: [[8, 11], [16, 32]],
  7: [[9, 11], [16, 31]],
  8: [[11, 13], [16, 23], [27, 31]],
  9: [[12, 14], [16, 23], [28, 31]],
  10: [[12, 15], [16, 23], [30, 33]],
  11: [[13, 15], [17, 22], [29, 34]],
  12: [[13, 15], [17, 21], [30, 34]],
  13: [[13, 14], [32, 33]],
};

/* открытые страны — заливка брендовым цветом */
const OPEN = new Set([
  '5:5', '5:6', '5:7', '5:8', '5:9', '5:10', '6:6', '6:7', '6:8', '6:9', '6:10', '7:9', '7:10',
  '3:3', '3:4', '4:4',
  '4:18', '4:19', '5:17', '5:18', '5:19', '5:20', '6:17', '6:18', '6:19', '6:20',
  '4:25', '4:26', '4:27', '4:28', '5:25', '5:26', '5:27',
  '8:12', '8:13', '9:12', '11:19', '10:20',
]);

/* страны-производители, ещё не открытые */
const SOON = new Set(['2:4', '2:5', '2:6', '2:7', '2:8', '3:5', '3:6', '3:7', '3:8', '3:9', '2:9', '2:10']);

function worldMap({ w = 1000, cell = 26, gap = 4 } = {}) {
  const size = cell - gap;
  const rects = [];
  for (const [rowStr, ranges] of Object.entries(LAND)) {
    const row = +rowStr;
    for (const [a, b] of ranges) {
      for (let c = a; c <= b; c++) {
        const key = row + ':' + c;
        const fill = OPEN.has(key) ? 'var(--somelie)' : SOON.has(key) ? '#E2E8F8' : '#E3E4E4';
        rects.push(`<rect x="${c * cell}" y="${row * cell}" width="${size}" height="${size}" rx="3" fill="${fill}"/>`);
      }
    }
  }
  return `<svg class="map-card__img" viewBox="0 ${cell} ${36 * cell} ${13 * cell}"
    width="${w}" preserveAspectRatio="xMidYMid meet">${rects.join('')}</svg>`;
}

document.querySelectorAll('[data-worldmap]').forEach(el => {
  el.innerHTML = worldMap(el.dataset.worldmap ? JSON.parse(el.dataset.worldmap) : {});
});
