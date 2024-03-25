import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentApiService extends HttpClient {

  private readonly API: string = 'https://api.themoviedb.org/';
  private readonly LANGUAGUE: string = 'es';
  private readonly API_KEY: string = 'ddb009082352f64c7c12111af9a06fdb';
  private readonly TOKEN: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGIwMDkwODIzNTJmNjRjN2MxMjExMWFmOWEwNmZkYiIsInN1YiI6IjY1MTIzYTZiZThkMGI0MDBjYTg3OTIwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14bNtGqXLqLFItC-q5Bf9oMz8VfgxyHmQiuNbgVeexA';
  constructor(handler: HttpHandler) {
    super(handler)
  }

  public override get<T>(url: string) {
    url = this.API + url;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`
    });
    return super.get<T>(url, {
      params: {
        language: this.LANGUAGUE,
        include_image_language: this.LANGUAGUE,
        api_key: this.API_KEY
      },
      headers: headers
    })
  }
}
