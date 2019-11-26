import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllUsersComponent } from './admin-view-all-users.component';

describe('AdminViewAllUsersComponent', () => {
  let component: AdminViewAllUsersComponent;
  let fixture: ComponentFixture<AdminViewAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
