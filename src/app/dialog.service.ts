import { Injectable } from "@angular/core"
import { LatLng } from "leaflet"

@Injectable({
  providedIn: "root"
})
export class DialogService {
<<<<<<< HEAD
  private currentDialog: Dialog = Dialog.MapView

  public showDialog(dialog: Dialog): void {
    this.currentDialog = dialog
  }
  //public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditLatLng: LatLng | null = null

  public getCurrentDialog(): Dialog {
    return this.currentDialog
=======
  public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditLatLng: LatLng | null = null

  public open(): void {
    this.isShowCreateOrEditDialog = true
  }

  public close(): void {
    this.isShowCreateOrEditDialog = false
>>>>>>> 240eb2725baa999d0d6ce2ca5000814d8c66bd4e
  }

  dialogs = Dialog
}

export enum Dialog {
  MapView,
  PlaceEdit
}