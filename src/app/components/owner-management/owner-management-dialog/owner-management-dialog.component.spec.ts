import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManagementDialogComponent } from './owner-management-dialog.component';

describe('OwnerManagementAddeditDialogComponent', () => {
  let component: OwnerManagementDialogComponent;
  let fixture: ComponentFixture<OwnerManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerManagementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
