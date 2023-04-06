import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSecComponent } from './hotel-sec.component';

describe('HotelSecComponent', () => {
  let component: HotelSecComponent;
  let fixture: ComponentFixture<HotelSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
