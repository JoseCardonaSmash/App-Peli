import { ChangeDetectorRef, Component,  Input, OnInit, inject} from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() dataFilm: any[] = [];
  public selectIndex: number = 0;
  @Input() indicators: boolean = true;
  private loadingService: LoadingService = inject(LoadingService);
  private cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public loading: boolean = false;


  ngOnInit() {
    setInterval(() => this.randomFilm(), 50000)
    this.showLoadingSkeleton();
  }

  private showLoadingSkeleton(): void {
    this.loadingService.loading$.subscribe(value => {
      this.loading = value.isLoading;
      console.log('Coje hpta', this.loading);
      this.cdRef.detectChanges();
    });
  }

  public selectImg(img: number ) {
    this.selectIndex = img;
  }

  public nextImg(i: number) {
    if(this.selectIndex === 0) {
      this.selectIndex = this.dataFilm.length - 1;
    }
    this.selectIndex--;
  }

  private randomFilm(): void {
    this.selectIndex = (this.selectIndex + 1) % this.dataFilm.length;
  }



}
