import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceManagementHistoryDialogComponent } from './price-management-history-dialog.component';

describe('PriceManagementHistoryDialogComponent', () => {
  let component: PriceManagementHistoryDialogComponent;
  let fixture: ComponentFixture<PriceManagementHistoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceManagementHistoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceManagementHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
