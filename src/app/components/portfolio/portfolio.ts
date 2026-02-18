import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styles: [],
})
export class PortfolioComponent {
  currentSlide = 0;

  portfolioItems = [
    { id: 1, title: 'Кухня в стилі модерн', description: 'Елегантна кухня з натуральних матеріалів у сучасному стилі' },
    { id: 2, title: 'Спальня преміум-класу', description: 'Комфортна та стильна спальня з індивідуальним дизайном' },
    { id: 3, title: 'Вітальня в класичному стилі', description: 'Розкішна вітальня з меблями ручної роботи' },
    { id: 4, title: 'Гардеробна кімната', description: 'Функціональний простір для зберігання з продуманою організацією' },
    { id: 5, title: 'Кухня-студія', description: 'Сучасна кухня відкритого планування з островом' },
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.portfolioItems.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.portfolioItems.length) % this.portfolioItems.length;
  }
}
