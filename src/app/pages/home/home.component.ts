import { Component } from '@angular/core';
import { IntroductionsectionComponent } from '../../components/section/introductionsection/introductionsection.component';
import { TimesectionComponent } from '../../components/section/timesection/timesection.component';
import { SubscribesectionComponent } from '../../components/section/subscribesection/subscribesection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionsectionComponent,TimesectionComponent,SubscribesectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
