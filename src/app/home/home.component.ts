import { Component } from '@angular/core';
import { BigCardComponent } from "../big-card/big-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
