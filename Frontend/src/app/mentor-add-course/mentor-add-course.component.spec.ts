import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAddCourseComponent } from './mentor-add-course.component';

describe('MentorAddCourseComponent', () => {
  let component: MentorAddCourseComponent;
  let fixture: ComponentFixture<MentorAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
