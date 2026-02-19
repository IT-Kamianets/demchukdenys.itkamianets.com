import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from '../../components/hero/hero';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { ServicesComponent } from '../../components/services/services';
import { ArticlesComponent } from '../../components/articles/articles';
import { AdvantagesComponent } from '../../components/advantages/advantages';
import { ContactFormComponent } from '../../components/contact-form/contact-form';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    PortfolioComponent,
    ServicesComponent,
    ArticlesComponent,
    AdvantagesComponent,
    ContactFormComponent,
    CtaBannerComponent,
  ],
  templateUrl: './home.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Demchuk Denys — Кухні та меблі люкс якості');
    this.meta.updateTag({ name: 'description', content: 'Створюємо унікальні меблі преміум-класу. Дизайн інтер\'єру, кухні та меблі на замовлення у Кам\'янці-Подільському.' });
    this.meta.updateTag({ property: 'og:title', content: 'Demchuk Denys — Кухні та меблі люкс якості' });
    this.meta.updateTag({ property: 'og:description', content: 'Створюємо унікальні меблі преміум-класу, які перетворюють ваш простір на витвір мистецтва.' });
  }
}
