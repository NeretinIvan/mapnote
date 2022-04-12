import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    MarkdownEditorComponent
  ],
  exports: [
    MarkdownEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MarkdownEditorModule { }
