import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { NewReleaseComponent } from './admin-component/new-release/new-release.component';
import { ProductAnalyticsComponent } from './admin-component/product-analytics/product-analytics.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {
  path:'',
  component:DashboardComponent
  },
  {
  path:'Dashboard',
  component:DashboardComponent
  },
  {
  path:'New-Release',
  component:NewReleaseComponent
  },
  {
  path:'Product',
  component:ProductsComponent
  },
  {
  path:'Products-Analytics',
  component:ProductAnalyticsComponent
  },
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
