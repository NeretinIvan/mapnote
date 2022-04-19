import { Injectable } from "@angular/core"
import { LatLng } from "leaflet"

@Injectable({
  providedIn: "root"
})
export class DialogService {
  public isCurrentEditLatLng: LatLng | null = null
  private currentDialog: Dialog = Dialog.MapView

  public showDialog(dialog: Dialog): void {
    this.currentDialog = dialog
  }
  
  public getCurrentDialog(): Dialog {
    return this.currentDialog
  }

  dialogs = Dialog
}

export enum Dialog {
  MapView,
  PlaceEdit
}