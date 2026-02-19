import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  templateUrl: './services.html',
  styles: [],
})
export class ServicesPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Послуги — Demchuk Denys');
    this.meta.updateTag({ name: 'description', content: 'Дизайн інтер\'єру, виготовлення меблів на замовлення та безкоштовний замір приміщення.' });
    this.meta.updateTag({ property: 'og:title', content: 'Послуги — Demchuk Denys' });
    this.meta.updateTag({ property: 'og:description', content: 'Дизайн інтер\'єру, виготовлення меблів на замовлення та безкоштовний замір приміщення.' });
  }

  services = [
    {
      title: 'Дизайн інтер\'єру',
      description: 'Створюємо стильні та функціональні інтер\'єри для будь-якої кімнати. Наші дизайнери розробляють проєкт з урахуванням ваших побажань, стилю життя та бюджету.',
      includes: ['Консультація та обговорення побажань', '3D-візуалізація проєкту', 'Підбір матеріалів та кольорів', 'Авторський нагляд за реалізацією'],
      image: 'img/services/k4.jpg',
    },
    {
      title: 'Меблі на замовлення',
      description: 'Унікальні меблі, створені спеціально для вашого простору. Використовуємо натуральні матеріали та фурнітуру преміум-класу від провідних європейських виробників.',
      includes: ['Індивідуальне проєктування', 'Виготовлення з натуральних матеріалів', 'Доставка та монтаж', 'Гарантійне обслуговування 5 років'],
      image: 'img/services/m4.jpg',
    },
    {
      title: 'Замір простору',
      description: 'Точний вимір вашого приміщення для ідеального планування. Професійний замірник виїжджає до вас безкоштовно у зручний час.',
      includes: ['Безкоштовний виїзд замірника', 'Точні виміри лазерним обладнанням', 'Фото-фіксація приміщення', 'Попередній розрахунок вартості'],
      image: 'img/services/p4.jpg',
    },
  ];
}
