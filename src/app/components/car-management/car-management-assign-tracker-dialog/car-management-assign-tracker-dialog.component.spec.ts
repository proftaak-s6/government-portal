import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementAssignTrackerDialogComponent } from './car-management-assign-tracker-dialog.component';

describe('CarManagementAssignTrackerDialogComponent', () => {
  let component: CarManagementAssignTrackerDialogComponent;
  let fixture: ComponentFixture<CarManagementAssignTrackerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarManagementAssignTrackerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementAssignTrackerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
