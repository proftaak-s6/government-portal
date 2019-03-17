import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementAddEditDialog } from './owner-management-addedit-dialog.component';

describe('OwnerManagementAddeditDialogComponent', () => {
  let component: OwnerManagementAddEditDialog;
  let fixture: ComponentFixture<OwnerManagementAddEditDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementAddEditDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementAddEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
