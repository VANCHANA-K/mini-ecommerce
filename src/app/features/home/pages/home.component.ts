import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FlashSaleComponent } from '../components/flash-sale.component';
import { ProductGridComponent } from '../components/product-grid.component';
import { StoreListComponent } from '../components/store-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    FlashSaleComponent,
    ProductGridComponent,
    StoreListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories = [
    { label: 'T-Shirt', icon: '/images/categories/tshirt.svg' },
    { label: 'Jacket', icon: '/images/categories/jacket.svg' },
    { label: 'Shirt', icon: '/images/categories/shirt.svg' },
    { label: 'Jeans', icon: '/images/categories/jeans.svg' },
    { label: 'Bag', icon: '/images/categories/bag.svg' },
    { label: 'Shoes', icon: '/images/categories/shoes.svg' },
    { label: 'Watches', icon: '/images/categories/watch.svg' },
    { label: 'Cap', icon: '/images/categories/cap.svg' },
    { label: 'All Categories', icon: '/images/categories/all.svg' },
  ];
}
