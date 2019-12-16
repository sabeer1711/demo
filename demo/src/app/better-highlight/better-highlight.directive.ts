import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor = 'transparent'
  @Input() highlightedColor = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string
  ngOnInit() {
    this.backgroundColor = this.defaultColor
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color',"blue");
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color',"blue");
    this.backgroundColor = this.highlightedColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color',"gold");
    this.backgroundColor = this.defaultColor
  }

}
