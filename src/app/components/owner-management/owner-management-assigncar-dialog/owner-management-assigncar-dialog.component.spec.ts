import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementAssignCarDialog } from './owner-management-assigncar-dialog.component';

describe('OwnerManagementAssigncarDialogComponent', () => {
  let component: OwnerManagementAssignCarDialog;
  let fixture: ComponentFixture<OwnerManagementAssignCarDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementAssignCarDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementAssignCarDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
