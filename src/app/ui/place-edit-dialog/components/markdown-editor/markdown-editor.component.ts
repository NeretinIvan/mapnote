import { AfterViewInit, Component, forwardRef, SecurityContext } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"
import { DomSanitizer } from '@angular/platform-browser';
import { Markdown } from 'src/app/domain/markdown';

@Component({
  selector: 'mn-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownEditorComponent),
      multi: true
    }
  ]
})
export class MarkdownEditorComponent implements ControlValueAccessor {
  public isDisabled: boolean;
  public isRedacting: boolean = true;
  public previewHtml: string;
  public markdown: Markdown = new Markdown("");

  constructor(private sanitizer: DomSanitizer) {
  }

  public onEditorTouched(): void {}
  public onEditorChanged(newMarkdown: Markdown): void {}

  public switchToEditing(): void {
    this.isRedacting = true;
  }

  public switchToPreview(): void {
    this.isRedacting = false;
    this.previewHtml = this.sanitizer.sanitize(SecurityContext.HTML, this.markdown.generateHtml());
  }

  public writeValue(value: string): void {
    this.markdown = new Markdown(value);
  }

  public registerOnChange(fn: (newMarkdown: Markdown) => void): void {
    this.onEditorChanged = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onEditorTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
