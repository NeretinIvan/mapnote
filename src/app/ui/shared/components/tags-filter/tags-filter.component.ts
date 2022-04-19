import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { removeElementAtIndex, findElementIndex } from 'src/app/lib';

@Component({
  selector: 'mn-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements OnInit {
  @Input()
  public elements: string[]
  @Input()
  public selected: string[]

  @Output()
  public selectedChanges = new EventEmitter<string[]>()

  constructor() { }

  ngOnInit(): void {
  }

  public onClickTag(index: number): void {
    const selectedTag: string = this.elements[index];

    if (this.selected.includes(selectedTag)) {
      const tagIndex = findElementIndex(selectedTag, this.selected)
      this.selected = removeElementAtIndex(tagIndex, this.selected)
    }
    else {
      this.selected = new Array(...this.selected, selectedTag)
    }

    this.selectedChanges.emit(this.selected)
  }
}
