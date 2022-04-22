import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManageEditComponent } from './task-manage-edit.component';

describe('TaskManageEditComponent', () => {
  let component: TaskManageEditComponent;
  let fixture: ComponentFixture<TaskManageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
