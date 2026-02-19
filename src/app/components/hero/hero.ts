import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styles: [],
})
export class HeroComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  onSearch() {
    const query = this.searchQuery.trim();
    if (query) {
      this.router.navigate(['/products'], { queryParams: { q: query } });
    }
  }
}
