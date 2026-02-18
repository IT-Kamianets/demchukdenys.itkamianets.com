import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { ServicesComponent } from '../../components/services/services';
import { ArticlesComponent } from '../../components/articles/articles';
import { AdvantagesComponent } from '../../components/advantages/advantages';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    PortfolioComponent,
    ServicesComponent,
    ArticlesComponent,
    AdvantagesComponent,
  ],
  templateUrl: './home.html',
  styles: [],
})
export class HomeComponent {}
