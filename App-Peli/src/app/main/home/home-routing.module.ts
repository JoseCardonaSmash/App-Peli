import { ShowFilmsComponent } from './pages/show-films/show-films.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShowFilmsComponent
  },
  {
    path: 'search',
    loadChildren: () => import('@main/search/search.module').then(s => s.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
