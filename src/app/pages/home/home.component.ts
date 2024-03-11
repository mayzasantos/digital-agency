import { Component } from '@angular/core';
import { IntroductionsectionComponent } from '../../components/section/introductionsection/introductionsection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
