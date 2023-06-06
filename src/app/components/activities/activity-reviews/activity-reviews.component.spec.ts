import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReviewsComponent } from './activity-reviews.component';

describe('ActivityReviewsComponent', () => {
  let component: ActivityReviewsComponent;
  let fixture: ComponentFixture<ActivityReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
