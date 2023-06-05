import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsPageComponent } from './transports-page.component';

describe('TransportsPageComponent', () => {
  let component: TransportsPageComponent;
  let fixture: ComponentFixture<TransportsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
