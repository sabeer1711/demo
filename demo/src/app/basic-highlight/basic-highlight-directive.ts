import { ElementRef, Directive, OnInit } from '@angular/core';
@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirectives implements OnInit {
    constructor(private elementRef:ElementRef) {

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}