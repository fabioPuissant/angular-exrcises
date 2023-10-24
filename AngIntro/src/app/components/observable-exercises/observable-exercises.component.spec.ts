import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExercisesComponent } from './observable-exercises.component';

describe('ObservableExercisesComponent', () => {
  let component: ObservableExercisesComponent;
  let fixture: ComponentFixture<ObservableExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableExercisesComponent]
    });
    fixture = TestBed.createComponent(ObservableExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
