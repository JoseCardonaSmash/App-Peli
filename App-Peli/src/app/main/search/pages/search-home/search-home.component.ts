import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent {
  public dataFilmQuery: any[] = [];


  public handleData(event: any): void {
    this.dataFilmQuery = event;
    console.log('Datos recibidos desde el componente hijo:', event);
  }

}
