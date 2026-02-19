import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-articles',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './articles.html',
  styles: [],
})
export class ArticlesComponent {
  articles = [
    {
      title: 'Як створити затишок у спальні: поради від професіоналів',
      excerpt: 'Дізнайтесь секрети створення ідеального місця для відпочинку від наших дизайнерів інтер\'єру.',
      date: '15 Січня 2024',
      image: 'img/article/s1.jpg',
    },
    {
      title: '5 трендів у дизайні кухонь, які варто спробувати у 2024 році',
      excerpt: 'Огляд найактуальніших тенденцій у проєктуванні кухонних просторів цього року.',
      date: '10 Січня 2024',
      image: 'img/article/k.jpg',
    },
    {
      title: 'Ідеальні меблі для маленьких просторів: функціональність та стиль',
      excerpt: 'Як обрати меблі, що максимально використовують кожен квадратний метр вашого дому.',
      date: '05 Січня 2024',
      image: 'img/article/l1.jpg',
    },
  ];
}
