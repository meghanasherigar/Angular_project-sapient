import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3ChildOneComponent } from './assignment3-child-one.component';

describe('Assignment3ChildOneComponent', () => {
  let component: Assignment3ChildOneComponent;
  let fixture: ComponentFixture<Assignment3ChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3ChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
