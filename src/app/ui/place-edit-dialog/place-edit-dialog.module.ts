import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { MdEditorModule } from "../shared/components/md-editor/md-editor.module"
import { PhotosUploaderModule } from "../shared/components/photos-uploader/photos-uploader.module"
import { RatingModule } from "../shared/components/rating/rating.module"
import { TagsModule } from "../shared/components/tags/tags.module"
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { MarkdownEditorModule } from './components/markdown-editor/markdown-editor.module';

@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    TagsModule,
    MarkdownEditorModule,
    PhotosUploaderModule
  ]
})
export class PlaceEditDialogModule { }
