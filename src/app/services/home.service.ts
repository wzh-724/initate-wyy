import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Banner, HotTag, SongSheet } from './data-types/commom.types';
import { API_CONFIG, ServicesModule } from './services.module';
@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  // 获取轮播图
  getBanners(): Observable<Banner[]> {
    return this.http.get(this.uri + 'banner')
      .pipe(map((res: any) => res.banners))
    // .pipe(map((res: { banners: Banner[] }) => res.banners));
  }
  // 获取热门标签
  getHotTags(): Observable<HotTag[]> {
    return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: any) => res.tags.slice(0, 5)));
  }
  // 获取热门歌单
  getPersonalSheetList(): Observable<SongSheet[]> {
    return this.http.get(this.uri + 'personalized')
      .pipe(map((res: any) => res.result.slice(0, 16)))
    // .pipe(map((res:{result:SongSheet[]})=>res.result))
  }
}
