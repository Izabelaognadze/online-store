import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../page/header/header.component';
import { NavigationMenuComponent } from '../page/navigation-menu/navigation-menu.component';
import { FooterComponent } from '../page/footer/footer.component';

@Component({
  selector: 'org-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationMenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
