import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllStudentsComponent } from './admin-view-all-students.component';

describe('AdminViewAllStudentsComponent', () => {
  let component: AdminViewAllStudentsComponent;
  let fixture: ComponentFixture<AdminViewAllStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
