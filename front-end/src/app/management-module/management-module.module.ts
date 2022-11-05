import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { ManagementComponentsComponent } from './management-components/management-components.component';
import { AdminLoginComponent } from './management-components/AdminManagement/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-components/AdminManagement/admin-register/admin-register.component';
import { UserRegisterComponent } from './management-components/user-management/user-register/user-register.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    ManagementComponentsComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
