import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewCourseComponent } from './mentor-view-course.component';

describe('MentorViewCourseComponent', () => {
  let component: MentorViewCourseComponent;
  let fixture: ComponentFixture<MentorViewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorViewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorViewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
