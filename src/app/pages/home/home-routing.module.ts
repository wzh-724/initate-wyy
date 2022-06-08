import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolveService } from './home-resolve.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: '发现' }, resolve: { homeDatas: HomeResolveService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  //通过@NgModule()的providers将服务注入到NgModule中，限制服务只能在当前NgModule里面使用。
  providers: [HomeResolveService]
})
export class HomeRoutingModule { }
