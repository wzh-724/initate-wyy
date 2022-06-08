import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { first, forkJoin, Observable } from "rxjs";
import { Banner, HotTag, Singer, SongSheet } from "src/app/services/data-types/commom.types";
import { HomeService } from "src/app/services/home.service";
import { SingerService } from "src/app/services/singer.service";
type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];
// 加@Injectable()告诉Angular系统这是一个可注入的服务。
@Injectable()
export class HomeResolveService implements Resolve<HomeDataType>{
  constructor(
    private homeServe: HomeService,
    private singerServe: SingerService,
  ) { }
  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeServe.getBanners(),
      this.homeServe.getHotTags(),
      this.homeServe.getPersonalSheetList(),
      this.singerServe.getEnterSinger(),
    ]).pipe(first())
  }
}