import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styles: [],
})
export class ServicesComponent {
  services = [
    {
      title: 'Дизайн інтер\'єру',
      description: 'Створюємо стильні та функціональні інтер\'єри для будь-якої кімнати',
      image: 'img/services/k4.jpg',
    },
    {
      title: 'Меблі на замовлення',
      description: 'Унікальні меблі, створені спеціально для вашого простору',
      image: 'img/services/m4.jpg',
    },
    {
      title: 'Замір простору',
      description: 'Точний вимір вашого приміщення для ідеального планування',
      image: 'img/services/p4.jpg',
    },
  ];
}
