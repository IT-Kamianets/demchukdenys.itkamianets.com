import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  imports: [],
  templateUrl: './advantages.html',
  styles: [],
})
export class AdvantagesComponent {
  advantages = [
    {
      title: 'Безкоштовний замір',
      description: 'Наш спеціаліст безкоштовно виїде до вас та зробить точні заміри приміщення',
    },
    {
      title: 'Створення дизайну',
      description: 'Розробляємо унікальний дизайн-проєкт з урахуванням всіх ваших побажань',
    },
    {
      title: 'Виробництво',
      description: 'Виготовлення меблів будь-якої складності з якісних матеріалів',
    },
    {
      title: 'Доставка та монтаж',
      description: 'Професійна доставка та встановлення меблів у зручний для вас час',
    },
  ];
}
