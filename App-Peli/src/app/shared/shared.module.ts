import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchFilmComponent } from './components/search-film/search-film.component';
import { ListSearchComponent } from './components/list-search/list-search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '@core/interceptor/loading.interceptor';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomeInfoComponent,
    CarouselComponent,
    SearchFilmComponent,
    ListSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
    ReactiveFormsModule

  ],
  exports: [SidebarComponent,
  NavbarComponent,
  HomeInfoComponent,
  SearchFilmComponent,
  ListSearchComponent
  ],

})
export class SharedModule { }
