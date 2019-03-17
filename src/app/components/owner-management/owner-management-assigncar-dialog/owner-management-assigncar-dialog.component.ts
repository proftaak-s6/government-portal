import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Owner } from 'src/entities/Owner';
import { Car } from 'src/entities/Car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'rr-owner-management-assigncar-dialog',
  templateUrl: './owner-management-assigncar-dialog.component.html',
  styleUrls: ['./owner-management-assigncar-dialog.component.less']
})
export class OwnerManagementAssignCarDialog implements OnInit {

  private cars: Car[];
  private selectedCar: Car;

  constructor(
    public dialogRef: MatDialogRef<OwnerManagementAssignCarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Owner,
    private carService: CarService) { }

  ngOnInit() {
    this.carService.findAll().subscribe(x => this.cars = x);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.selectedCar);
  }

}
