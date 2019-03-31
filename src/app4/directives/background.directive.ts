import { 
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[app4Background]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;

    constructor(/*private element: ElementRef, private renderer: Renderer2*/) {}

    ngOnInit() {
        
    }

    @HostListener('mouseenter') mouseEnter() {
        //const {nativeElement} = this.element;
        //this.renderer.setStyle(nativeElement, 'background-color', 'red');
        //this.renderer.removeClass(nativeElement, 'white-text');
        this.background = 'green';
    }

    @HostListener('mouseleave') mouseLeave() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.background = 'transparent';
    }
}