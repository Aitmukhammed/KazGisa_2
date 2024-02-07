import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {
  private regex: RegExp = new RegExp(/^[0-9.-]*$/);

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!this.regex.test(value)) {
      input.value = value.slice(0, -1); 
    }
  }
}
