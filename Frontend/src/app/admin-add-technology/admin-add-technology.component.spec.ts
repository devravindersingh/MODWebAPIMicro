import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTechnologyComponent } from './admin-add-technology.component';

describe('AdminAddTechnologyComponent', () => {
  let component: AdminAddTechnologyComponent;
  let fixture: ComponentFixture<AdminAddTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
