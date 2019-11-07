import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeCss'
})
export class SanitizeCssPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(content: string): SafeHtml {
    if (!content) return null;
    return this.domSanitizer.bypassSecurityTrustStyle(content);
  }
}
