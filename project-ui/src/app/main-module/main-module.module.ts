import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HeaderComponent } from './main-component/header/header.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    MainComponentComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
