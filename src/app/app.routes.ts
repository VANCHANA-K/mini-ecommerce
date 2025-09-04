import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { ProductsComponent } from './features/products/pages/products.component';
import { CartComponent } from './features/cart/pages/cart.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { CheckoutComponent } from './features/checkout/pages/checkout.component';
import { WishlistComponent } from './features/wishlist/pages/wishlist.component';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
