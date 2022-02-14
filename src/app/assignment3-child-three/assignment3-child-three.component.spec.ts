import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3ChildThreeComponent } from './assignment3-child-three.component';

describe('Assignment3ChildThreeComponent', () => {
  let component: Assignment3ChildThreeComponent;
  let fixture: ComponentFixture<Assignment3ChildThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3ChildThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3ChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
