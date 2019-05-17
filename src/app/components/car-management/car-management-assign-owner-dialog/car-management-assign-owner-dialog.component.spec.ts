import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AssignOwnerDialogComponent } from "./assign-owner-dialog.component";

describe("AssignOwnerDialogComponent", () => {
  let component: AssignOwnerDialogComponent;
  let fixture: ComponentFixture<AssignOwnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignOwnerDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
