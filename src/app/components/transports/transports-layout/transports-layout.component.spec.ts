import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsLayoutComponent } from './transports-layout.component';

describe('TransportsLayoutComponent', () => {
  let component: TransportsLayoutComponent;
  let fixture: ComponentFixture<TransportsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
