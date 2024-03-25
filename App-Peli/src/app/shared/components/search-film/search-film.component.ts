import {Component, EventEmitter, inject, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PelisService} from "@shared/services/pelis.service";
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnDestroy{
  public searchForm!: FormGroup;

  private unsubscribe$ = new Subject<void>();
  public setDataQueryFilm: any[] = [];
  @Output() eventEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private formBuilder: FormBuilder, private pelisService: PelisService) {
    this.searchForm = this.formBuilder.group({
      query: [''],
    });
    this.changeDetectedQuery();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSubmit(query: string): void {
    this.pelisService.searchFilm(query).subscribe(({ results }) => {
      if (Array.isArray(results)) {
        this.setDataQueryFilm = results;
        this.eventEmitter.emit(this.setDataQueryFilm);
      }
    });
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit(this.searchForm.value.query);
    }
  }

  public changeDetectedQuery(): void {
    this.searchForm.controls['query'].valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        if(query) {
          this.onSubmit(query);
        } else {
          this.listFilms();
        }
      });
  }

  private listFilms(): void {
    const page:number = 1;
    this.pelisService.listAllFilms(page).subscribe(({results}) => {
      if (Array.isArray(results)) {
        this.setDataQueryFilm = results;
        this.eventEmitter.emit(this.setDataQueryFilm);
      }
    })
  }
}
