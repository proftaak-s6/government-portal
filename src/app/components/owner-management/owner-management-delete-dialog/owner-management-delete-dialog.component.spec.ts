import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementDeleteDialog } from './owner-management-delete-dialog.component';

describe('OwnerManagementDeleteDialogComponent', () => {
  let component: OwnerManagementDeleteDialog;
  let fixture: ComponentFixture<OwnerManagementDeleteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementDeleteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementDeleteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
