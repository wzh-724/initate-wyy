import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map, Observable } from 'rxjs';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-types/commom.types';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex: number = 0;
  banners: Banner[] = [];
  hotTags: HotTag[] = [];
  songSheetList: SongSheet[] = [];
  singers: Singer[] = [];
  toType: any = {
    PRE: 'pre', NEXT: 'next',
  }
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel!: NzCarouselComponent;
  SingerService: any;
  constructor(
    private route: ActivatedRoute,
    private sheetsServe: SheetService
  ) {
    this.route.data.pipe(map(res => res['homeDatas'])).subscribe(([banners, hotTags, songSheetList, singers]) => {
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetList = songSheetList;
      this.singers = singers;
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
  onPlaySheet(id: number) {
    console.log("id:", id);
    this.sheetsServe.playSheet(id).subscribe(res => {
      console.log('res:', res);
    })
  }

}
