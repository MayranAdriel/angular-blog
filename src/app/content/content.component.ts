import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {

  contentId: string | null = '';

  contentPhoto: string = '';

  contentTitle: string = '';

  contentDescription: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.contentId = params.get('id');
    })
    this.setValuesToComponent(this.contentId);

  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((item) => item.id === id);

    this.contentTitle = result[0].title;
    this.contentPhoto = result[0].photo;

    this.contentDescription = result[0].description;

  }

}
