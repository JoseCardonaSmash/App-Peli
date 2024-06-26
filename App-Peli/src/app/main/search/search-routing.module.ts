import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHomeComponent } from './pages/search-home/search-home.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
