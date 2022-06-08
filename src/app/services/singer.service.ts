import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Singer } from './data-types/commom.types';
import { API_CONFIG, ServicesModule } from './services.module';
import { map } from 'rxjs/operators';
type SingerParams = {
  offset: number;
  limit: number;
  type: string;
}
const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  type: '-1'
}
@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  // 获取歌手分类
  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams()
      .set('offset', args.offset)
      .set('limit', args.limit)
      .set('type', args.type);
    return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: any) => res.artists))
    // .pipe(map((res: { artists: Singer[] }) => res.artists));
  }

}
