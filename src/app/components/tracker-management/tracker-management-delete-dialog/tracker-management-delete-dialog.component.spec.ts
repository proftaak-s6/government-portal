import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerManagementDeleteDialogComponent } from './tracker-management-delete-dialog.component';

describe('TrackerManagementDeleteDialogComponent', () => {
  let component: TrackerManagementDeleteDialogComponent;
  let fixture: ComponentFixture<TrackerManagementDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerManagementDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerManagementDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
