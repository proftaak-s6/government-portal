import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceManagementEditDialogComponent } from './price-management-edit-dialog.component';

describe('PriceManagementEditDialogComponent', () => {
  let component: PriceManagementEditDialogComponent;
  let fixture: ComponentFixture<PriceManagementEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceManagementEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceManagementEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
