import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[libHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input() libHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.libHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = color;
  }
}
