import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './home/menu/menu.component';
import { MenuTitleComponent } from './home/menu-title/menu-title.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MenuFooterComponent} from './home/menu-footer/menu-footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, MenuTitleComponent, HomeComponent, RouterModule, MenuFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
