import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // @HostBinding('class.show') isOpen = false;
  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggleOpen(event: Event) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event.target']) close(targetElement) {
    const inside: boolean = this.elementRef.nativeElement.contains(targetElement);
    if (!inside) {
        this.isOpen = false;
        this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
  }
}
