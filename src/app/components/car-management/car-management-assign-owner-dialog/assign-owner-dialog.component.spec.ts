import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CarManagementAssignOwnerDialogComponent } from "./car-management-assign-owner-dialog.component";

describe("CarManagementAssignOwnerDialogComponent", () => {
  let component: CarManagementAssignOwnerDialogComponent;
  let fixture: ComponentFixture<CarManagementAssignOwnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarManagementAssignOwnerDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementAssignOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
