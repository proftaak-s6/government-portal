import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Car } from "src/entities/Car";
import {
  RdwService,
  RdwCarResponse,
  RdwFuelResponse
} from "src/services/rdw.service";

@Component({
  selector: "app-car-management-create-dialog",
  templateUrl: "./car-management-create-dialog.component.html",
  styleUrls: ["./car-management-create-dialog.component.less"]
})
export class CarManagementCreateDialogComponent implements OnInit {
  constructor(
    private rdwService: RdwService,
    public dialogRef: MatDialogRef<CarManagementCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit() {}

  retrieveCarData(value: string) {
    this.rdwService
      .getCarByLicensePlateNumber(value)
      .subscribe((data: RdwCarResponse) => {
        this.data.licensePlateNumber = data.kenteken;
        this.data.vehicleType = data.voertuigsoort;
        this.data.engineType = `${data.cilinderinhoud}cc`;
        this.data.energyLabel = data.zuinigheidslabel;
        this.data.brand = data.merk;
        this.data.series = data.handelsbenaming;
      });

    this.rdwService
      .getFuelByLicensePlateNumber(value)
      .subscribe((data: RdwFuelResponse) => {
        this.data.fuelType = data.brandstof_omschrijving;
      });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.data);
  }
}
