import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdownToggle]'
})
export class DropdownDirective{
    @HostBinding('class.open') toggleClass: boolean;
    @HostListener('document:click', ['$event']) toggleDropdown(evt: Event){
        this.toggleClass = this.elRef.nativeElement.contains(evt.target) ? !this.toggleClass : false;
    }

    constructor(private elRef: ElementRef){}
}