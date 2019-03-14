import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementDialogComponent } from './car-management-dialog.component';

describe('CarManagementDialogComponent', () => {
  let component: CarManagementDialogComponent;
  let fixture: ComponentFixture<CarManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarManagementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
