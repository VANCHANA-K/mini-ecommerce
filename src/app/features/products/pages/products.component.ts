import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, startWith } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../components/product-card.component';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  
  allProducts = signal<Product[]>([]);
  categories = signal<string[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  searchControl = new FormControl('', { nonNullable: true });
  categoryControl = new FormControl('', { nonNullable: true });

  searchValue = toSignal(this.searchControl.valueChanges.pipe(startWith('')), { initialValue: '' });
  categoryValue = toSignal(this.categoryControl.valueChanges.pipe(startWith('')), { initialValue: '' });

  filteredProducts = computed(() => {
    const keyword = this.searchValue().toLowerCase();
    const selectedCategory = this.categoryValue();
    
    return this.allProducts().filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(keyword);
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  });

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allProducts.set(products);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.error.set('Failed to load products. Please try again.');
        this.loading.set(false);
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  retryLoadProducts(): void {
    this.loadProducts();
  }

  clearFilters(): void {
    this.searchControl.setValue('');
    this.categoryControl.setValue('');
  }
}