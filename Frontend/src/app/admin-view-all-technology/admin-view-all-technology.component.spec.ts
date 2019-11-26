import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllTechnologyComponent } from './admin-view-all-technology.component';

describe('AdminViewAllTechnologyComponent', () => {
  let component: AdminViewAllTechnologyComponent;
  let fixture: ComponentFixture<AdminViewAllTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
