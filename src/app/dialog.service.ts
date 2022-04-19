import { Injectable } from "@angular/core"
import { LatLng } from "leaflet"

@Injectable({
  providedIn: "root"
})
export class DialogService {
  private currentDialog: Dialog = Dialog.MapView

  public showDialog(dialog: Dialog): void {
    this.currentDialog = dialog
  }
  //public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditLatLng: LatLng | null = null

  public getCurrentDialog(): Dialog {
    return this.currentDialog
  }

  dialogs = Dialog
}

export enum Dialog {
  MapView,
  PlaceEdit
}