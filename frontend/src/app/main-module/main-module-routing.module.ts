import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { EditCardComponent } from './main-component/edit-card/edit-card.component';
import { HomeComponent } from './main-component/home/home.component';
import { ProductsComponent } from './main-component/products/products.component';
import { PurchaseFailedComponent } from './main-component/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfullComponent } from './main-component/purchase-successfull/purchase-successfull.component';
import { ViewProductComponent } from './main-component/view-product/view-product.component';
import { WildCardComponent } from './main-component/wild-card/wild-card.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"view-product",
    component:ViewProductComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"check-out",
    component:CheckOutComponent
  },
  {
    path:"edit-cart",
    component:EditCardComponent
  },
  {
    path:"purchase-successfull",
    component:PurchaseSuccessfullComponent
  },
  {
    path:"purchase-failed",
    component:PurchaseFailedComponent
  },
  {
    path:"wild-card",
    component:WildCardComponent
  },
] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
