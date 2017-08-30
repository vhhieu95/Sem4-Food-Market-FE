import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.route';
import { CATEGORYCOMPONENTS } from './component/category';
import { PRODUCTCOMPONENTS } from './component/product';
import { SEARCHCOMPONENTS } from './component/search';
import { ShoppingCartComponent } from './component/cart';
import { TEMPLATECOMPONENTS } from './component/template';
import { HOMECOMPONENTS } from './component/home';
import { RegisterComponent } from './component/register/register.component';
import { PaymentComponent } from './component/payment/payment.component';
import { LoginComponent } from './component/login/login.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountComponent} from './component/account/account.component';
import {TokenService} from './service/token.service';
import {ShareService} from './service/share.service';
import {ActivateGuard} from './security/activate.guard';
import {SupplierGuard} from './security/supplier.guard';
import {NoLoggedGuard} from './security/no-logged.guard';
import {CartService} from './service/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    CATEGORYCOMPONENTS,
    PRODUCTCOMPONENTS,
    SEARCHCOMPONENTS,
    ShoppingCartComponent,
    TEMPLATECOMPONENTS,
    HOMECOMPONENTS,
    // ProductListComponent
    LoginComponent,
     RegisterComponent,
    PaymentComponent,
      AccountComponent
  ],
  imports: [
   routing,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ActivateGuard,
    TokenService,
    ShareService,
    SupplierGuard,
    NoLoggedGuard, CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
