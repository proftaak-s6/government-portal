import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementDeleteDialogComponent } from './car-management-delete-dialog.component';

describe('CarManagementDeleteDialogComponent', () => {
  let component: CarManagementDeleteDialogComponent;
  let fixture: ComponentFixture<CarManagementDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarManagementDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
