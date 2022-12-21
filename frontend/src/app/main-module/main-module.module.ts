import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './main-component/home/home.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { ProductsComponent } from './main-component/products/products.component';
import { ViewProductComponent } from './main-component/view-product/view-product.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { WildCardComponent } from './main-component/wild-card/wild-card.component';
import { EditCardComponent } from './main-component/edit-card/edit-card.component';
import { PurchaseSuccessfullComponent } from './main-component/purchase-successfull/purchase-successfull.component';
import { PurchaseFailedComponent } from './main-component/purchase-failed/purchase-failed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    ViewProductComponent,
    CheckOutComponent,
    WildCardComponent,
    EditCardComponent,
    PurchaseSuccessfullComponent,
    PurchaseFailedComponent
  ],
  imports: [
    CommonModule,
   
    MainModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
  
})
export class MainModuleModule { }
