import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInTodayComponent } from './clock-in-today.component';

describe('ClockInTodayComponent', () => {
  let component: ClockInTodayComponent;
  let fixture: ComponentFixture<ClockInTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockInTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockInTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
