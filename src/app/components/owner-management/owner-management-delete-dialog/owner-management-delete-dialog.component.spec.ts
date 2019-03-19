import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementDeleteDialogComponent } from './owner-management-delete-dialog.component';

describe('OwnerManagementDeleteDialogComponent', () => {
  let component: OwnerManagementDeleteDialogComponent;
  let fixture: ComponentFixture<OwnerManagementDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
