import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { InforAccountComponent } from './infor-account/infor-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailComponent,
    FooterComponent,
    CartComponent,
    InforAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
