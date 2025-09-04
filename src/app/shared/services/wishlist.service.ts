import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../features/products/models/product.model';

const WISHLIST_KEY = 'mini-ecommerce-wishlist';

@Injectable({ 
  providedIn: 'root' 
})
export class WishlistService {
  private wishlist$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  get items$() {
    return this.wishlist$.asObservable();
  }

  get items() {
    return this.wishlist$.value;
  }

  get count() {
    return this.items.length;
  }

  private loadFromStorage() {
    try {
      const saved = localStorage.getItem(WISHLIST_KEY);
      if (saved) {
        const items = JSON.parse(saved);
        this.wishlist$.next(items);
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      this.wishlist$.next([]);
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(this.items));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }

  toggle(product: Product) {
    const currentItems = this.items;
    const existingIndex = currentItems.findIndex(p => p.id === product.id);
    
    let updatedItems: Product[];
    if (existingIndex !== -1) {
      // Remove from wishlist
      updatedItems = currentItems.filter(p => p.id !== product.id);
    } else {
      // Add to wishlist
      updatedItems = [...currentItems, product];
    }
    
    this.wishlist$.next(updatedItems);
    this.saveToStorage();
  }

  isFavorite(productId: number): boolean {
    return this.items.some(p => p.id === productId);
  }

  clear() {
    this.wishlist$.next([]);
    this.saveToStorage();
  }

  remove(productId: number) {
    const updatedItems = this.items.filter(p => p.id !== productId);
    this.wishlist$.next(updatedItems);
    this.saveToStorage();
  }
}