import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { ReactiveFormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    MarkdownEditorComponent
  ],
  exports: [
    MarkdownEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarkdownEditorModule { }
