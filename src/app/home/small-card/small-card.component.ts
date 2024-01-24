import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  cardData = '';
  @Input()
  cardPhoto: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  Id: string = '0';
}
