import { Component, OnInit, inject } from '@angular/core';
import { PelisService } from '@shared/services/pelis.service';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent implements OnInit {
  private readonly pelisService: PelisService = inject(PelisService);
  public data: any[] | any = [];


  ngOnInit(): void {
    this.listAllPopularFilms();
  }

  public listAllPopularFilms(): void {
    this.pelisService.listAllHomeFilms().subscribe(({results}) => {
      if (Array.isArray(results)) {
        this.data = results;
        console.log(this.data);
      }
    })
  }

}
