import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorUpdateCourseComponent } from './mentor-update-course.component';

describe('MentorUpdateCourseComponent', () => {
  let component: MentorUpdateCourseComponent;
  let fixture: ComponentFixture<MentorUpdateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorUpdateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorUpdateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
