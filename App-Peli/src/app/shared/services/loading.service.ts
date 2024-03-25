import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new Subject<{isLoading: boolean}>();

  loading$ = this.loadingSubject.asObservable();

  show() {

    this.loadingSubject.next({isLoading: true});
  }

  hide() {
    this.loadingSubject.next({isLoading: false});
  }
}
