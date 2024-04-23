import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatModule } from './pages/mat/mat.module';
import { EditDialogComponent } from './pages/admin/products/edit-dialog/edit-dialog.component';

import { CustomerProductsComponent } from './pages/website/customer-products/customer-products.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    CustomerComponent,
    LayoutComponent,
    LoginComponent,
    OrderComponent,
    ProductsComponent,
    CategoryProductsComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
    LandingComponent,
    EditDialogComponent,
    CustomerProductsComponent,
    
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterOutlet,
    CommonModule,RouterLink,MatModule,ReactiveFormsModule,RouterModule.forRoot([]),
    
  ],
  providers: [
    provideClientHydration(),provideHttpClient(), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
