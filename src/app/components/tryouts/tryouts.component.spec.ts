import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsComponent } from './tryouts.component';

describe('TryoutsComponent', () => {
  let component: TryoutsComponent;
  let fixture: ComponentFixture<TryoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryoutsComponent]
    });
    fixture = TestBed.createComponent(TryoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
