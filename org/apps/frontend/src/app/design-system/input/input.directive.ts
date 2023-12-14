import { Directive, HostBinding } from '@angular/core';
import { clsx } from 'clsx'

@Directive({
  selector: '[orgInput]',
  standalone: true,
})
export class InputDirective {

  @HostBinding('class')
  get additionalClasses(){
    return clsx({
      'border-black border-opacity-50 border-2 rounded-lg pl-2 py-[5px] focus:animate-shake placeholder:text-clr-orange placeholder:font-bold':true
    });
  }
  constructor() {}
}
