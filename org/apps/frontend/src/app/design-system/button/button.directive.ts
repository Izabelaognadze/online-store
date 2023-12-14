import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx'

type ButtonType = 'button1' | 'button2' | 'button3';

@Directive({
  selector: '[orgButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant : ButtonType = 'button1';

  @HostBinding ('class')
  get additionalClasses(){
    return clsx({
      'uppercase font-bold font-manr text-[13px] leading-normal tracking-[1px] duration-300': true,
      'py-[15px] px-[30px] bg-[#D87D4A] hover:bg-[#FBAF85] text-white' : this.variant === 'button1',
      'py-[15px] px-[30px] border-2 border-black hover:text-white hover:bg-black' : this.variant === 'button2',
      'flex items-center gap-3 hover:gap-5 text-[#808080] hover:text-[#D87D4A]Button3" class="flex items-center gap-3 hover:gap-5 text-[#808080] hover:text-[#D87D4A]' : this.variant === 'button3',
    })
  }
  constructor() {}
}
