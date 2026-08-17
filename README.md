# CoolClever · Сомелье — прототип

Статический HTML/CSS/JS‑прототип раздела «Сомелье» для КуулКлевер (Web Talk 26):
карточка товара (вина), личный кабинет «Мои винные путешествия» и интерактивная
карта географии путешествий.

## Демо

Развёрнуто на Vercel:
https://cool-clever-wine-bt0oyyz2q-valentinamikh99-9644s-projects.vercel.app/

## Страницы

| Файл | Описание |
|------|----------|
| `index.html` | Редирект на карточку товара |
| `product.html` | Карточка товара (вино) |
| `travels.html` | Личный кабинет «Мои винные путешествия» |
| `map.html` | География винных путешествий (карта мира) |
| `prototype.html` | Единый прототип со встроенными стилями |

## Структура

```
├── index.html
├── product.html
├── travels.html
├── map.html
├── prototype.html
├── css/
│   └── app.css        # общие стили и дизайн-токены
└── js/
    ├── layout.js      # общий header/layout
    └── worldmap.js    # отрисовка карты мира
```

## Запуск

Проекту не нужна сборка. Достаточно открыть `index.html` в браузере или поднять
любой статический сервер:

```bash
python3 -m http.server 8000
# затем открыть http://localhost:8000/
```

## Технологии

- HTML5 / CSS3 (кастомные свойства — дизайн-токены из Figma)
- Ванильный JavaScript
- Иконки [Lucide](https://lucide.dev/), шрифт Ubuntu (Google Fonts)
