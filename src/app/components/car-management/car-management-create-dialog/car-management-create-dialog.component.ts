import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RdwService, RdwCarResponse, RdwFuelResponse } from 'src/app/services/rdw/rdw.service';
import { Car } from 'src/entities/Car';

@Component({
  selector: 'app-car-management-create-dialog',
  templateUrl: './car-management-create-dialog.component.html',
  styleUrls: ['./car-management-create-dialog.component.less']
})
export class CarManagementCreateDialogComponent implements OnInit {

  constructor(
    private rdwService: RdwService,
    public dialogRef: MatDialogRef<CarManagementCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {

  }

  ngOnInit() {
  }

  retrieveCarData(value: string) {
    this.rdwService.getCarByLicensePlateNumber(value).subscribe((data: RdwCarResponse) => {
      this.data.licensePlateNumber = data.kenteken;
      this.data.vehicleType = data.voertuigsoort;
      this.data.engineType = `${data.cilinderinhoud}cc`;
      this.data.energyLabel = data.zuinigheidslabel;
    },
    err => console.log('licenseplate is invalid, or there are missing fields'));

    this.rdwService.getFuelByLicensePlateNumber(value).subscribe((data: RdwFuelResponse) => {
      this.data.fuelType = data.brandstof_omschrijving;
    },
    err => console.log('licenseplate is invalid, or there are missing fields'));
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.data);
  }

}
