import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../car-management.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-management-dialog',
  templateUrl: './car-management-dialog.component.html',
  styleUrls: ['./car-management-dialog.component.less']
})
export class CarManagementDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CarManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('save data');
  }

}
