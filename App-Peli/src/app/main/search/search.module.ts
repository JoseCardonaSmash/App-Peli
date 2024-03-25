import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './pages/search-home/search-home.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SearchHomeComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
