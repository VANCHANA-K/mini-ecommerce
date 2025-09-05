import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-product-grid',
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  products: ProductItem[] = [
    {
      id: 1,
      title: 'Phone',
      price: 499,
      image: '/images/products/prod-1.svg',
    },
    {
      id: 2,
      title: 'Laptop',
      price: 999,
      image: '/images/products/prod-2.svg',
    },
    {
      id: 3,
      title: 'Camera',
      price: 299,
      image: '/images/products/prod-3.svg',
    },
    {
      id: 4,
      title: 'Tablet',
      price: 199,
      image: '/images/products/prod-4.svg',
    },
  ];
}
