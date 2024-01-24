import { Component } from '@angular/core';
import { BigCardComponent } from "./big-card/big-card.component";
import { SmallCardComponent } from "./small-card/small-card.component";
import { MenuComponent } from './menu/menu.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, MenuComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
