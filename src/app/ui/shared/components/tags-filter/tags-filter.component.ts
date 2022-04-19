import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mn-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements OnInit {
  @Input()
  public elements: string[] = ['one', 'two', 'three']
  @Input()
  public selected: string[] = ['two']

  @Output()
  public selectedChanges = new EventEmitter<string[]>()

  constructor() { }

  ngOnInit(): void {
  }

  public onClickTag(index: number) {
    //todo: also logic which adds or removes element
    this.selectedChanges.emit(this.selected)
  }

}
