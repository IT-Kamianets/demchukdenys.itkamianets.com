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
  ];

  products = [
    { id: 1, title: 'Кухня «Біла класика»', description: 'П-подібна кухня з білими матовими фасадами, дерев\'яною стільницею та темним фартухом. Фурнітура Blum.', price: 85000, category: 'kitchen', image: 'img/slider/k1.webp' },
    { id: 2, title: 'Кухня з барною стійкою', description: 'Сучасна кухня у сірих тонах з кварцовою стільницею та барною зоною з оксамитовими стільцями.', price: 120000, category: 'kitchen', image: 'img/slider/k3.webp' },
    { id: 3, title: 'Кухня «Мінімалізм»', description: 'Пряма кухня у бежевих тонах з вбудованою технікою: духова шафа, мікрохвильовка, газова поверхня.', price: 65000, category: 'kitchen', image: 'img/services/k4.webp' },
    { id: 4, title: 'Комод на металевому каркасі', description: 'Комод з темно-сірими фасадами та білою стільницею на чорному металевому каркасі. 4 ящики.', price: 18500, category: 'furniture', image: 'img/services/m4.webp' },
    { id: 5, title: 'Гардеробна система', description: 'Вбудована гардеробна з білими глянцевими фасадами, дзеркальною секцією та робочим столом.', price: 45000, category: 'furniture', image: 'img/services/p4.webp' },
    { id: 6, title: 'Спальний гарнітур', description: 'Ліжко з м\'яким узголів\'ям та каркасом зі світлого дерева, висувні ящики, приліжкова тумба.', price: 35000, category: 'furniture', image: 'img/slider/m1.webp' },
  ];

  constructor(private route: ActivatedRoute, public router: Router, private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Продукція - Demchuk Denys');
    this.meta.updateTag({ name: 'description', content: 'Якісні кухні, меблі та аксесуари від Demchuk Denys. Кухні на замовлення, шафи-купе, комоди.' });
    this.meta.updateTag({ property: 'og:title', content: 'Продукція - Demchuk Denys' });
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
