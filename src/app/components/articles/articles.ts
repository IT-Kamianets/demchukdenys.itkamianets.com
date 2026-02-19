import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { ScrollAnimateChildrenDirective } from '../../directives/scroll-animate-children';

@Component({
  selector: 'app-articles',
  imports: [RouterLink, ScrollAnimateDirective, ScrollAnimateChildrenDirective],
  templateUrl: './articles.html',
  styles: [],
})
export class ArticlesComponent {
  articles = [
    {
      title: 'Робоче місце вдома: як облаштувати домашній кабінет',
      excerpt: 'Поради щодо створення зручного та стильного робочого простору у вашій оселі.',
      date: '15 Січня 2024',
      image: 'img/article/s1.jpg',
    },
    {
      title: 'Як обрати ідеальну кухню: поради від виробника',
      excerpt: 'Розбираємо ключові моменти при замовленні кухні — від планування до вибору матеріалів.',
      date: '10 Січня 2024',
      image: 'img/article/k.jpg',
    },
    {
      title: 'Вбудовані меблі: максимум простору у кожній кімнаті',
      excerpt: 'Як вбудовані шафи та системи зберігання допомагають ефективно використати кожен метр.',
      date: '05 Січня 2024',
      image: 'img/article/l1.jpg',
    },
  ];
}
