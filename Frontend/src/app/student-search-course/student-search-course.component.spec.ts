import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchCourseComponent } from './student-search-course.component';

describe('StudentSearchCourseComponent', () => {
  let component: StudentSearchCourseComponent;
  let fixture: ComponentFixture<StudentSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
