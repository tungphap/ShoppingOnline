import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { InforAccountComponent } from './infor-account/infor-account.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'info-account', component: InforAccountComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
