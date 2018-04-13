import { Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighLigth]'
})

export class HighLightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  // @Input() overColor = 'blue'; se puede usar alias del mismo nombre de la
  // directiva para evitar otra propiedad en el template
  // tslint:disable-next-line:no-input-rename
  @Input('appHighLigth') overColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red'); una forma no tan optima
    this.backgroundColor = this.overColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); una forma no tan optima
  }

}
