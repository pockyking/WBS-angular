import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInHistoryComponent } from './clock-in-history.component';

describe('ClockInHistoryComponent', () => {
  let component: ClockInHistoryComponent;
  let fixture: ComponentFixture<ClockInHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockInHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockInHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
