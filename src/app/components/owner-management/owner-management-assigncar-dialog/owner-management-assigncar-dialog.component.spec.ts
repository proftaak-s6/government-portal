import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementAssignCarDialogComponent } from './owner-management-assigncar-dialog.component';

describe('OwnerManagementAssigncarDialogComponent', () => {
  let component: OwnerManagementAssignCarDialogComponent;
  let fixture: ComponentFixture<OwnerManagementAssignCarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementAssignCarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementAssignCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
