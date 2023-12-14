import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component'
import { FooterComponent } from '../shared/footer/footer.component'
import { NavigationMenuComponent } from '../shared/navigation-menu/navigation-menu.component'

@Component({
  selector: 'org-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, NavigationMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
