import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementDialog } from './owner-management-dialog.component';

describe('OwnerManagementAddeditDialogComponent', () => {
  let component: OwnerManagementDialog;
  let fixture: ComponentFixture<OwnerManagementDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
