import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManageAddComponent } from './task-manage-add.component';

describe('TaskManageAddComponent', () => {
  let component: TaskManageAddComponent;
  let fixture: ComponentFixture<TaskManageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
