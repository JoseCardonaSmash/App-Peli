import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@main/home/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: ()=> import('./main/home/home.module').then(h => h.HomeModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
