import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../../features/products/models/product.model';

const CART_KEY = 'cart_items';

@Injectable({ 
  providedIn: 'root' 
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        const items = JSON.parse(saved);
        this.itemsSubject.next(items);
      }
    } catch (error) {
      console.error('Error loading cart from storage:', error);
    }
  }

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  get itemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  add(product: Product): void {
    const items = [...this.items];
    const existingIndex = items.findIndex(item => item.product.id === product.id);
    
    if (existingIndex >= 0) {
      items[existingIndex].quantity += 1;
    } else {
      items.push({ product, quantity: 1 });
    }
    
    this.update(items);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }

    const items = [...this.items];
    const existingIndex = items.findIndex(item => item.product.id === productId);
    
    if (existingIndex >= 0) {
      items[existingIndex].quantity = quantity;
      this.update(items);
    }
  }

  remove(productId: number): void {
    const updated = this.items.filter(item => item.product.id !== productId);
    this.update(updated);
  }

  clear(): void {
    this.update([]);
  }

  private update(items: CartItem[]): void {
    this.itemsSubject.next(items);
    this.saveToStorage(items);
  }

  private saveToStorage(items: CartItem[]): void {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }

  isInCart(productId: number): boolean {
    return this.items.some(item => item.product.id === productId);
  }

  getQuantity(productId: number): number {
    const item = this.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }
}