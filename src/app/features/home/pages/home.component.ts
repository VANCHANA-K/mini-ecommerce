import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlashSaleComponent } from '../components/flash-sale.component';
import { ProductGridComponent } from '../components/product-grid.component';
import { StoreListComponent } from '../components/store-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink,
    FlashSaleComponent,
    ProductGridComponent,
    StoreListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
