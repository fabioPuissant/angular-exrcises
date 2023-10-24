import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTwoWayDataBindingComponent } from './task-two-way-data-binding.component';

describe('TaskTwoWayDataBindingComponent', () => {
  let component: TaskTwoWayDataBindingComponent;
  let fixture: ComponentFixture<TaskTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(TaskTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
