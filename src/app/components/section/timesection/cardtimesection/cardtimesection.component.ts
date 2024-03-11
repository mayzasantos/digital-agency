import { Component, Input } from '@angular/core';

interface PeaopleProps{
  name: string,
  photo: string,
  job: string
}

@Component({
  selector: 'app-cardtimesection',
  standalone: true,
  imports: [],
  templateUrl: './cardtimesection.component.html',
  styleUrl: './cardtimesection.component.css'
})
export class CardtimesectionComponent {
  @Input() people!: PeaopleProps
}
