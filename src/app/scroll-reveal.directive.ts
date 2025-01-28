import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]' // Use this name to apply the directive
})
export class ScrollRevealDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', []) // Listen to the scroll event
  onWindowScroll() {
    const position = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 50) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 1s ease-out');
    }
  }

  ngOnInit() {
    // Set initial styles
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
  }
}
