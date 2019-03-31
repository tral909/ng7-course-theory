import { 
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[app4Background]'
})
export class BackgroundDirective implements OnInit {
    @Input('app4Background') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') background: string;

    constructor(/*private element: ElementRef, private renderer: Renderer2*/) {}

    ngOnInit() {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        //const {nativeElement} = this.element;
        //this.renderer.setStyle(nativeElement, 'background-color', 'red');
        //this.renderer.removeClass(nativeElement, 'white-text');
        //this.background = 'green';
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        //this.background = 'transparent';
        this.background = this.defaultColor;
    }
}