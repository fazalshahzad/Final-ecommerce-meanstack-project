import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { UserLoginComponent } from './management-components/user-managements/user-login/user-login.component';
import { UserRegisterComponent } from './management-components/user-managements/user-register/user-register.component';
import { AdminLoginComponent } from './management-components/admin-managements/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-components/admin-managements/admin-register/admin-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    AdminRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModuleModule { }
