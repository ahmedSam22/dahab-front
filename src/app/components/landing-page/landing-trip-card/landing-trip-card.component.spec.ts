import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTripCardComponent } from './landing-trip-card.component';

describe('LandingTripCardComponent', () => {
  let component: LandingTripCardComponent;
  let fixture: ComponentFixture<LandingTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTripCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
