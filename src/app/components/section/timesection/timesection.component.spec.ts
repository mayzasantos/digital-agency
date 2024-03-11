import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesectionComponent } from './timesection.component';

describe('TimesectionComponent', () => {
  let component: TimesectionComponent;
  let fixture: ComponentFixture<TimesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
