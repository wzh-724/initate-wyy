import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/commom.types';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less']
})
export class SingleSheetComponent implements OnInit {
  @Input() sheet: any;
  @Output() onPlay = new EventEmitter<number>();
  ngOnInit(): void {
    // console.log(this.sheet);
  }
  playSheet(id: number) {
    this.onPlay.emit(id);
  }
}
