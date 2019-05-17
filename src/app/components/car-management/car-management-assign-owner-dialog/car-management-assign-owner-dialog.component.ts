import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { BrpService, Person } from "src/services/brp.service";

@Component({
  selector: "rr-car-management-assign-owner-dialog",
  templateUrl: "./car-management-assign-owner-dialog.component.html",
  styleUrls: ["./car-management-assign-owner-dialog.component.less"]
})
export class CarManagementAssignOwnerDialogComponent implements OnInit {
  private brpPerson: Person;
  private bsnInputField = "";

  constructor(
    public dialogRef: MatDialogRef<CarManagementAssignOwnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public brpId: number,
    private brpService: BrpService
  ) {
    if (brpId) {
      this.brpService.getPersonByBrpId(this.brpId).subscribe((res: Person) => {
        this.brpPerson = res;
        this.bsnInputField = res.bsn;
      });
    } else {
      this.brpPerson = {
        id: 0,
        bsn: "",
        gegeven_naam: "",
        achternaam: "",
        geboortedatum: "",
        straat: "",
        postcode: "",
        woonplaats: "",
        land: "",
        emailadres: ""
      };
    }
  }

  ngOnInit() {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.brpPerson.id);
  }

  onBsnInputFieldChange() {
    this.brpService
      .getPersonByBsn(this.bsnInputField)
      .subscribe(res => (this.brpPerson = res));
  }
}
