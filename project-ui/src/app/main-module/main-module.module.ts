import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HeaderComponent } from './main-component/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {  MatToolbarModule,} from '@angular/material/toolbar';



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
    MainModuleRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule

   
  ]
})
export class MainModuleModule { }
