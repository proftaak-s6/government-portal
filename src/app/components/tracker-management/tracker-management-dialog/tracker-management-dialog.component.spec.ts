import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerManagementDialogComponent } from './tracker-management-dialog.component';

describe('TrackerManagementDialogComponent', () => {
  let component: TrackerManagementDialogComponent;
  let fixture: ComponentFixture<TrackerManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerManagementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
