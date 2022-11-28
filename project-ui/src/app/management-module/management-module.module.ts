import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { LoginComponent } from './management-component/login/login.component';
import { SingUpComponent } from './management-component/sing-up/sing-up.component';



@NgModule({
  declarations: [
    ManagementComponentComponent,
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagementModuleModule { }
