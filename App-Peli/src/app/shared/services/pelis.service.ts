import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviromentApiService } from './enviroment-api.service';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private readonly enviromentApiService: EnviromentApiService = inject(EnviromentApiService);

  public listAllHomeFilms(value: string = '3/movie/popular'): Observable<any> {
    return this.enviromentApiService.get<any>(`${value}`);
  }

  public listAllFilms(page:number ,value: string = '3/discover/movie'): Observable<any> {
    return this.enviromentApiService.get<any>(`${value}?page=${page}`);
  }

  public searchFilm(query: string, value: string = '/3/search/multi' ): Observable<any> {
    return this.enviromentApiService.get<any>(`${value}?query=${query}`);
  }
}
