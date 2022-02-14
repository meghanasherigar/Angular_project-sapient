import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3ChildFourComponent } from './assignment3-child-four.component';

describe('Assignment3ChildFourComponent', () => {
  let component: Assignment3ChildFourComponent;
  let fixture: ComponentFixture<Assignment3ChildFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3ChildFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3ChildFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
