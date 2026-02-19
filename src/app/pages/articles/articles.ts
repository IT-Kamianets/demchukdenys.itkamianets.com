import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-articles-page',
  imports: [RouterLink],
  templateUrl: './articles.html',
  styles: [],
})
export class ArticlesPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Статті та новини — Demchuk Denys');
    this.meta.updateTag({ name: 'description', content: 'Корисні статті про дизайн інтер\'єру, тренди у меблях та поради від професіоналів.' });
    this.meta.updateTag({ property: 'og:title', content: 'Статті та новини — Demchuk Denys' });
    this.meta.updateTag({ property: 'og:description', content: 'Корисні статті про дизайн інтер\'єру, тренди у меблях та поради від професіоналів.' });
  }

  articles = [
    {
      id: 1,
      title: 'Як створити затишок у спальні: поради від професіоналів',
      excerpt: 'Дізнайтесь секрети створення ідеального місця для відпочинку від наших дизайнерів інтер\'єру.',
      date: '15 Січня 2024',
      image: 'img/article/s1.jpg',
    },
    {
      id: 2,
      title: '5 трендів у дизайні кухонь, які варто спробувати у 2024 році',
      excerpt: 'Огляд найактуальніших тенденцій у проєктуванні кухонних просторів цього року.',
      date: '10 Січня 2024',
      image: 'img/article/k.jpg',
    },
    {
      id: 3,
      title: 'Ідеальні меблі для маленьких просторів: функціональність та стиль',
      excerpt: 'Як обрати меблі, що максимально використовують кожен квадратний метр вашого дому.',
      date: '05 Січня 2024',
      image: 'img/article/l1.jpg',
    },
    {
      id: 4,
      title: 'Натуральне дерево в інтер\'єрі: переваги та догляд',
      excerpt: 'Чому натуральне дерево залишається найпопулярнішим матеріалом для меблів та як правильно за ним доглядати.',
      date: '28 Грудня 2023',
      image: 'img/article/s1.jpg',
    },
    {
      id: 5,
      title: 'Як обрати кухню мрії: покроковий гід',
      excerpt: 'Від планування до монтажу — все, що потрібно знати при замовленні кухні.',
      date: '20 Грудня 2023',
      image: 'img/article/k.jpg',
    },
    {
      id: 6,
      title: 'Організація зберігання: рішення для кожної кімнати',
      excerpt: 'Практичні ідеї для організації простору у вітальні, спальні та дитячій кімнаті.',
      date: '15 Грудня 2023',
      image: 'img/article/l1.jpg',
    },
  ];
}
