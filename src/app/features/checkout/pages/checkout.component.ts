import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  standalone: true,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  cart = inject(CartService);

  form = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(9)]]
  });

  placeOrder() {
    if (this.form.invalid || this.cart.items.length === 0) return;

    const order = {
      customer: this.form.getRawValue(),
      items: this.cart.items,
      total: this.cart.total
    };

    console.log('🧾 Order Placed:', order);

    alert('สั่งซื้อสำเร็จ!');
    this.cart.clear();
    this.router.navigateByUrl('/');
  }
}