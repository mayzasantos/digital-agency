import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-timesection',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './timesection.component.html',
  styleUrl: './timesection.component.css'
})
export class TimesectionComponent {
  peopleList = [
    {
      name: 'Diana Leite',
      photo: 'assets/peopletime1.jpeg',
      job: 'CEO',
    },
    {
      name: 'Jordan Rocha',
      photo: 'assets/peopletime4.jpeg',
      job: 'COO',
    },
    {
      name: 'Marcel Silva',
      photo: 'assets/peopletime3.jpeg',
      job: 'CTO',
    },
    {
      name: 'Selena Web' ,
      photo: 'assets/peopletime2.png',
      job: 'CDO',
    },
    
  ]
}
