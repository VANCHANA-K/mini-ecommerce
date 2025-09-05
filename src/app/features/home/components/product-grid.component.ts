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
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Laptop',
      price: 999,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Camera',
      price: 299,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Tablet',
      price: 199,
      image: 'https://via.placeholder.com/150',
    },
  ];
}
