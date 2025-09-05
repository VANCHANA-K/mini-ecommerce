import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Store {
  id: number;
  name: string;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-store-list',
  imports: [CommonModule],
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent {
  stores: Store[] = [
    { id: 1, name: 'Nike Sae Mall', image: '/images/stores/store-1.svg' },
    { id: 2, name: 'Barudak Disaster Mall', image: '/images/stores/store-2.svg' },
    { id: 3, name: 'Galaxy Galleria Mall', image: '/images/stores/store-3.svg' },
  ];
}
