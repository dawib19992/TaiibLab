import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPodswietlenie]'
})
export class PodswietlenieDirective {

  @HostBinding('class.podswietlenie') podswietlenie = false;
  @HostListener('mouseleave') onMouseLeave(){
    this.podswietlenie = false
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.podswietlenie = true
  }
  constructor() { }

}
