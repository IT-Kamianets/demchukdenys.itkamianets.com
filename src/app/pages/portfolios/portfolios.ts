import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolios',
  imports: [RouterLink],
  templateUrl: './portfolios.html',
  styles: [],
})
export class PortfoliosPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Портфоліо — Demchuk Denys');
    this.meta.updateTag({ name: 'description', content: 'Наші кращі роботи: кухні, спальні, вітальні та гардеробні кімнати преміум-класу.' });
    this.meta.updateTag({ property: 'og:title', content: 'Портфоліо — Demchuk Denys' });
    this.meta.updateTag({ property: 'og:description', content: 'Наші кращі роботи: кухні, спальні, вітальні та гардеробні кімнати преміум-класу.' });
  }

  portfolioItems = [
    { id: 1, title: 'Кухня в стилі модерн', description: 'Елегантна кухня з натуральних матеріалів у сучасному стилі з островом та вбудованою технікою.', image: 'img/1.jpg' },
    { id: 2, title: 'Спальня преміум-класу', description: 'Комфортна та стильна спальня з індивідуальним дизайном та м\'якими панелями.', image: 'img/2.jpg' },
    { id: 3, title: 'Вітальня в класичному стилі', description: 'Розкішна вітальня з меблями ручної роботи та натуральним деревом.', image: 'img/3.jpg' },
    { id: 4, title: 'Гардеробна кімната', description: 'Функціональний простір для зберігання з продуманою організацією та підсвіткою.', image: 'img/slider/k1.jpg' },
    { id: 5, title: 'Кухня-студія', description: 'Сучасна кухня відкритого планування з островом та барною стійкою.', image: 'img/slider/k3.jpg' },
    { id: 6, title: 'Меблі для вітальні', description: 'Комплект меблів для вітальні з натурального дуба у скандинавському стилі.', image: 'img/slider/m1.jpg' },
  ];
}
