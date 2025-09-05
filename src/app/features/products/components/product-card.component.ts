import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { WishlistService } from '../../../shared/services/wishlist.service';

@Component({
  standalone: true,
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Input() discount?: number;
  @Input() badge?: string;
  @Input() wishlist?: boolean;

  stars = Array(5);

  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);

  addToCart(): void {
    this.cartService.add(this.product);
  }

  get isInCart(): boolean {
    return this.cartService.isInCart(this.product.id);
  }

  get cartQuantity(): number {
    return this.cartService.getQuantity(this.product.id);
  }

  toggleFavorite(): void {
    if (this.wishlist !== undefined) {
      this.wishlist = !this.wishlist;
    } else {
      this.wishlistService.toggle(this.product);
    }
  }

  get isFavorite(): boolean {
    return this.wishlist ?? this.wishlistService.isFavorite(this.product.id);
  }
}
