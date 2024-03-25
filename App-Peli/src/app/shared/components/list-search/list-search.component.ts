import {Component, OnInit, inject, Input, HostListener} from '@angular/core';
import { PelisService } from '@shared/services/pelis.service';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {
  private pelisService: PelisService = inject(PelisService);
  @Input() data: any[] = [];
  private page: number = 1;
  private allPagesLoaded:boolean = false;

  ngOnInit(): void {
    this.listAllOptions();
  }

  private listFilms(page: number): void {
    this.pelisService.listAllFilms(page).subscribe(({results}) => {
      if (Array.isArray(results)) {
        this.data = [...this.data, ...results];
        //this.allPagesLoaded = true;
      }
    })
  }

  public onScrollDown() : void {
    this.page++;
    this.listFilms(this.page);
  }

  public clean() {
    this.listAllOptions();
  }

  public listAllOptions() : void {
    this.listFilms(this.page);
  }


  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let position = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    let max = document.documentElement.offsetHeight;

    if(position >= max * 1 && !this.allPagesLoaded) {
      this.onScrollDown();
    }
  }
}
