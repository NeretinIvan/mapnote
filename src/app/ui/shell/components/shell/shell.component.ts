import { Component, ElementRef, OnInit, Output, EventEmitter } from "@angular/core"
import { FormControl } from "@angular/forms"
import { LeafletMouseEvent } from "leaflet"
import { DialogService } from "../../../../dialog.service"
import { MapService } from "../../../../map.service"
import { MapMarkerRendererService } from "src/app/map-marker-renderer.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()

  constructor(
    private mapService: MapService,
    private element: ElementRef<HTMLElement>,
    private dialogService: DialogService,
    private mapMarkerRenderer: MapMarkerRendererService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true
        this.dialogService.isCurrentEditLatLng = event.latlng
      })

      this.element.nativeElement.addEventListener("click", () => {
        this.isShowAddButton = false
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.showDialog(this.dialogService.dialogs.PlaceEdit)
  }

  public onChangeSelectedTags(tags: string[]): void {
    this.mapMarkerRenderer.renderMarkers(tags)
  }
}
