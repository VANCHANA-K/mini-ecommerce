import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { ProductCardComponent } from '../../products/components/product-card.component';

@Component({
  standalone: true,
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  imports: [CommonModule, RouterLink, ProductCardComponent]
})
export class WishlistComponent {
  wishlistService = inject(WishlistService);

  get wishlistItems() {
    return this.wishlistService.items;
  }

  get itemCount() {
    return this.wishlistService.count;
  }
}