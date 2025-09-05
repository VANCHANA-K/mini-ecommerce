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
    { id: 1, name: 'Tech World', image: 'https://via.placeholder.com/300x100' },
    {
      id: 2,
      name: 'Fashion Hub',
      image: 'https://via.placeholder.com/300x100',
    },
    {
      id: 3,
      name: 'Gadget Galaxy',
      image: 'https://via.placeholder.com/300x100',
    },
  ];
}
