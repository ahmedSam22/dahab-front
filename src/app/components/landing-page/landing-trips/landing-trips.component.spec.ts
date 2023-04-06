import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTripsComponent } from './landing-trips.component';

describe('LandingTripsComponent', () => {
  let component: LandingTripsComponent;
  let fixture: ComponentFixture<LandingTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
