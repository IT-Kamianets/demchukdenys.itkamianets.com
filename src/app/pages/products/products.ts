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
    { id: 1, title: 'Кухня "Модерн"', description: 'Сучасна кухня з матовими фасадами та кварцовою стільницею.', price: 85000, category: 'kitchen', image: 'img/product/1.jpg' },
    { id: 2, title: 'Кухня "Класика"', description: 'Класична кухня з фасадами з масиву дуба та різьбленням.', price: 120000, category: 'kitchen', image: 'img/product/2.jpg' },
    { id: 3, title: 'Шафа-купе "Комфорт"', description: 'Вбудована шафа-купе з дзеркальними дверима та LED-підсвіткою.', price: 45000, category: 'furniture', image: 'img/services/k4.jpg' },
    { id: 4, title: 'Комод "Скандинавія"', description: 'Комод з масиву сосни у скандинавському стилі з висувними ящиками.', price: 18500, category: 'furniture', image: 'img/services/m4.jpg' },
    { id: 5, title: 'Стільниця з кварцу', description: 'Стільниця преміум-класу з натурального кварцу, стійка до подряпин.', price: 12000, category: 'accessories', image: 'img/services/p4.jpg' },
    { id: 6, title: 'Фурнітура Blum', description: 'Комплект фурнітури Blum для кухонних шаф з системою плавного закривання.', price: 8500, category: 'accessories', image: 'img/product/1.jpg' },
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
