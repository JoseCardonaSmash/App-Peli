import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '@shared/shared.module';
import { ShowFilmsComponent } from './pages/show-films/show-films.component';



@NgModule({
  declarations: [
    HomeComponent,
    ShowFilmsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
