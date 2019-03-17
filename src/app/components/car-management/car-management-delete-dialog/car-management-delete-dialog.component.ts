import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Car } from 'src/entities/Car';

@Component({
  selector: 'rr-car-management-delete-dialog',
  templateUrl: './car-management-delete-dialog.component.html',
  styleUrls: ['./car-management-delete-dialog.component.less']
})
export class CarManagementDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CarManagementDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.dialogRef.close(this.data);
  }

}
