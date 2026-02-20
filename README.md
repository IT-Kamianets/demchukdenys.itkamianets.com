# Demchuk Denys - Меблі на замовлення

Сайт-візитка меблевої майстерні **Demchuk Denys** з Кам'янця-Подільського. Кухні, корпусні меблі та гардеробні системи преміум-класу.

**Live:** [demchukdenys.itkamianets.com](https://demchukdenys.itkamianets.com)

## Технології

- **Angular 21** - standalone components, lazy routing
- **Tailwind CSS 4** - utility-first стилі, dark mode
- **TypeScript 5.9**
- **WebP** - оптимізовані зображення

## Функціонал

- Адаптивний дизайн (mobile-first)
- Dark / Light режим з збереженням у localStorage
- Каталог продукції з пошуком та фільтрами
- Портфоліо робіт з лайтбокс-галереєю
- Секція відгуків клієнтів
- Форма зворотного зв'язку
- Плаваюча кнопка Telegram / Телефон
- Кнопка "вгору"
- Scroll-анімації при появі секцій
- SEO: мета-теги, Open Graph

## Структура

```
src/
  app/
    components/        # Перевикористовувані компоненти
      header/              Хедер з навігацією та перемикачем теми
      footer/              Футер з контактами та соцмережами
      hero/                Головний банер з пошуком
      portfolio/           Каруселька робіт
      services/            Сітка послуг
      articles/            Сітка статей
      advantages/          Переваги + статистика
      testimonials/        Відгуки клієнтів
      contact-form/        Форма зворотного зв'язку
      cta-banner/          CTA-банер
      lightbox/            Лайтбокс для фото
      theme-toggle/        Перемикач теми
      floating-contact/    Плаваюча кнопка зв'язку
      back-to-top/         Кнопка "вгору"
    pages/             # Сторінки (lazy-loaded)
      home/                Головна
      portfolios/          Список робіт
      portfolio-detail/    Деталі роботи
      products/            Каталог продукції
      product-detail/      Деталі продукту
      articles/            Список статей
      article-detail/      Деталі статті
      services/            Послуги
    directives/        # Директиви анімацій
  styles.css           # Глобальні стилі, Tailwind, dark mode
public/
  img/                 # Зображення (JPG + WebP)
```

## Запуск

```bash
# Встановити залежності
npm install

# Запустити dev-сервер (http://localhost:4200)
npm start

# Зібрати production-білд
npm run build
```
