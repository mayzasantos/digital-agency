import { Component } from '@angular/core';
import { AboutussectionComponent } from '../../components/section/aboutussection/aboutussection.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutussectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
