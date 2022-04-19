import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { removeElementAtIndex, findElementIndex } from 'src/app/lib';
import { MapService } from 'src/app/map.service';

@Component({
  selector: 'mn-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements AfterViewInit {
  @Input()
  public elements: string[]
  @Input()
  public selected: string[]

  @Output()
  public selectedChanges = new EventEmitter<string[]>()

  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.waitForMapInit().then((map) => {
      this.selectedChanges.emit(this.selected)
    })
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
