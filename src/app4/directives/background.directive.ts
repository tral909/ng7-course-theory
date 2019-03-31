import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[app4Background]'
})
export class BackgroundDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        const {nativeElement} = this.element;
        this.renderer.setStyle(nativeElement, 'background-color', 'blue');
        this.renderer.addClass(nativeElement, 'white-text');
    }
}