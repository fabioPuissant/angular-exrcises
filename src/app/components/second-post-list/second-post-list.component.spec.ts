import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPostListComponent } from './second-post-list.component';

describe('SecondPostListComponent', () => {
  let component: SecondPostListComponent;
  let fixture: ComponentFixture<SecondPostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPostListComponent]
    });
    fixture = TestBed.createComponent(SecondPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
