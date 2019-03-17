import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RdwService, RdwCarResponse, RdwFuelResponse } from 'src/app/services/rdw/rdw.service';
import { Car } from 'src/entities/Car';

@Component({
  selector: 'app-car-management-dialog',
  templateUrl: './car-management-dialog.component.html',
  styleUrls: ['./car-management-dialog.component.less']
})
export class CarManagementDialogComponent implements OnInit {

  constructor(
    private rdwService: RdwService,
    public dialogRef: MatDialogRef<CarManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {

  }

  ngOnInit() {
  }

  retrieveCarData(value: string) {
    this.rdwService.getCarByLicensePlateNumber(value).subscribe((data: RdwCarResponse) => {
      this.data.LicensePlateNumber = data.kenteken;
      this.data.VehicleType = data.voertuigsoort;
      this.data.EngineType = `${data.cilinderinhoud}cc`;
      this.data.EnergyLabel = data.zuinigheidslabel;
    },
    err => console.log('licenseplate is invalid, or there are missing fields'));

    this.rdwService.getFuelByLicensePlateNumber(value).subscribe((data: RdwFuelResponse) => {
      this.data.FuelType = data.brandstof_omschrijving;
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
