import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [DecimalPipe, FormsModule, RouterLink],
  templateUrl: './products.html',
  styles: [],
})
export class ProductsPage implements OnInit {
  activeCategory = 'all';
  searchQuery = '';

  categories = [
    { key: 'all', label: 'Всі' },
    { key: 'kitchen', label: 'Кухні' },
    { key: 'furniture', label: 'Меблі' },
    { key: 'accessories', label: 'Аксесуари' },
  ];

  products = [
    { id: 1, title: 'Кухня "Модерн"', description: 'Матові фасади МДФ, кварцова стільниця 30 мм, фурнітура Blum. Система push-to-open.', price: 85000, category: 'kitchen', image: 'img/product/1.jpg' },
    { id: 2, title: 'Кухня "Класика"', description: 'Масив дуба з різьбленням ручної роботи, гранітна стільниця. Патинування у золотистий відтінок.', price: 120000, category: 'kitchen', image: 'img/product/2.jpg' },
    { id: 3, title: 'Шафа-купе "Комфорт"', description: 'Дзеркальні двері на всю висоту, система Raumplus. LED-підсвітка з датчиком відкривання.', price: 45000, category: 'furniture', image: 'img/services/k4.jpg' },
    { id: 4, title: 'Комод "Скандинавія"', description: 'Масив сосни з олійним покриттям, 4 ящики з прихованими напрямними. 120×45×85 см.', price: 18500, category: 'furniture', image: 'img/services/m4.jpg' },
    { id: 5, title: 'Стільниця з кварцу', description: 'Кварцовий агломерат 20/30 мм, 25+ кольорів. Не вбирає рідини, стійка до подряпин. Гарантія 10 років.', price: 12000, category: 'accessories', image: 'img/services/p4.jpg' },
    { id: 6, title: 'Фурнітура Blum', description: 'Комплект: петлі Blumotion + висувні системи Tandembox + підйомники Aventos. Довічна гарантія.', price: 8500, category: 'accessories', image: 'img/product/1.jpg' },
  ];

  constructor(private route: ActivatedRoute, public router: Router, private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Продукція — Demchuk Denys');
    this.meta.updateTag({ name: 'description', content: 'Якісні кухні, меблі та аксесуари від Demchuk Denys. Кухні на замовлення, шафи-купе, комоди.' });
    this.meta.updateTag({ property: 'og:title', content: 'Продукція — Demchuk Denys' });
    this.meta.updateTag({ property: 'og:description', content: 'Якісні кухні, меблі та аксесуари від Demchuk Denys.' });

    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
    });
  }

  get filteredProducts() {
    let result = this.products;

    if (this.activeCategory !== 'all') {
      result = result.filter(p => p.category === this.activeCategory);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.trim().toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }

  resetSearch() {
    this.searchQuery = '';
    this.router.navigate(['/products']);
  }
}
