import { ChangeDetectionStrategy, Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 在angular里默认的检测变更是检测该组件及其子组件， 如果设置为Onpush之后只会在@input输入属性发生变化之后才会触发变更检测，有利于提升性能
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  //static: true 是在模板检查变更之前检查
  //static: false 是在模板检查变更之前检查 适用于动态添加元素，例如有ngIf
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any> | undefined;
  @Input() activeIndex: number = 0;

  // @Output() public changeSlide: EventEmitter<string> = new EventEmitter();
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  ngOnInit(): void {
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }
}
