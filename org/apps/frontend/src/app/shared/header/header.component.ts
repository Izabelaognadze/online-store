import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../design-system/button/button.directive';

@Component({
  selector: 'org-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  name = '---------'
}
