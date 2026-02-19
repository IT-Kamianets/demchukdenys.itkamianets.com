import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './portfolio.html',
  styles: [],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  portfolioItems = [
    { id: 1, title: 'Кухня в стилі модерн', description: 'Елегантна кухня з натуральних матеріалів у сучасному стилі', image: 'img/slider/k1.jpg' },
    { id: 2, title: 'Спальня преміум-класу', description: 'Комфортна та стильна спальня з індивідуальним дизайном', image: 'img/slider/k3.jpg' },
    { id: 3, title: 'Вітальня в класичному стилі', description: 'Розкішна вітальня з меблями ручної роботи', image: 'img/slider/m1.jpg' },
    { id: 4, title: 'Гардеробна кімната', description: 'Функціональний простір для зберігання з продуманою організацією', image: 'img/slider/k1.jpg' },
    { id: 5, title: 'Кухня-студія', description: 'Сучасна кухня відкритого планування з островом', image: 'img/slider/k3.jpg' },
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.portfolioItems.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.portfolioItems.length) % this.portfolioItems.length;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = this.touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}
