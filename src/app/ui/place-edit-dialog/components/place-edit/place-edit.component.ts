import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(0, Validators.min(1)),
    description: new FormControl(),
    tags: new FormControl([ "Паб", "Бар", "Гастропаб", "Ресторан" ]),
    photos: new FormControl()
  })

  constructor() {
    this.form.get('rating').enable();
    setTimeout(() => {this.form.get('rating').disable(); console.log("disabled")}, 5000);
    setTimeout(() => {this.form.get('rating').enable(); console.log("enabled")}, 8000);
  }

  ngOnInit(): void {
  }
}
