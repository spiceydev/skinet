import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number | null;
  @Input() pageSize: number | null;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
    this.totalCount = null;
    this.pageSize = null;
  }

  ngOnInit(): void {}

  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }
}
