import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { ManagementComponentsComponent } from './management-components/management-components.component';
import { LoginComponent } from './management-components/login/login.component';
import { SingUpComponent } from './management-components/sing-up/sing-up.component';



@NgModule({
  declarations: [
    ManagementModuleComponent,
    ManagementComponentsComponent,
    LoginComponent,
    SingUpComponent,
   
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
