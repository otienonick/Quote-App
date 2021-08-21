import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){}

  @HostListener('click') onClick() {
    this.highlight('lime');
  }
  

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

  

}
