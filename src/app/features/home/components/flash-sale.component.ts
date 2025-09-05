import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FlashProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-flash-sale',
  imports: [CommonModule],
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.scss'],
})
export class FlashSaleComponent implements OnInit, OnDestroy {
  products: FlashProduct[] = [
    {
      id: 1,
      title: 'Sneakers',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Headphones',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Watch',
      price: 59.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Backpack',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  private endTime = Date.now() + 3600 * 1000;
  time = { hours: '00', minutes: '00', seconds: '00' };
  private intervalId?: number;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTime(): void {
    const diff = this.endTime - Date.now();
    const h = Math.max(Math.floor(diff / 3600000), 0);
    const m = Math.max(Math.floor((diff % 3600000) / 60000), 0);
    const s = Math.max(Math.floor((diff % 60000) / 1000), 0);
    this.time = {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  }
}
