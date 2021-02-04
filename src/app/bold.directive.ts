import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit{
  @Input('appBold')
  color: string;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.background = this.color;
  }

}
