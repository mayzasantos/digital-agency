import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtimesectionComponent } from './cardtimesection.component';

describe('CardtimesectionComponent', () => {
  let component: CardtimesectionComponent;
  let fixture: ComponentFixture<CardtimesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtimesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardtimesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
