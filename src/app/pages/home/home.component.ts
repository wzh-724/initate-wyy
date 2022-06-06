import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Banner } from 'src/app/services/data-types/commom.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex: number = 0;
  banners: Banner[] = [];
  toType: any = {
    PRE: 'pre', NEXT: 'next',
  }
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel!: NzCarouselComponent;
  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  }

  ngOnInit(): void {
  }
  onBeforeChange(e: { from: number, to: number }) {
    this.carouselActiveIndex = e.to;
  }
  onChangeSlide(type: 'pre' | 'next') {

    // if (type === this.toType.PRE) {
    //   this.nzCarousel.pre();
    // } else {
    //   this.nzCarousel.next()
    // }
    this.nzCarousel[type]();
  }
}
