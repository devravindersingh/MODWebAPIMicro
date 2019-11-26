import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllMentorsComponent } from './admin-view-all-mentors.component';

describe('AdminViewAllMentorsComponent', () => {
  let component: AdminViewAllMentorsComponent;
  let fixture: ComponentFixture<AdminViewAllMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
