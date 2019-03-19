import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementCreateDialogComponent } from './car-management-create-dialog.component';

describe('CarManagementDialogComponent', () => {
  let component: CarManagementCreateDialogComponent;
  let fixture: ComponentFixture<CarManagementCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarManagementCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
