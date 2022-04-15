import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class DialogService {
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