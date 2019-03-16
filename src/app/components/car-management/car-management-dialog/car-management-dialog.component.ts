import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../car-management.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RdwService } from 'src/app/services/rdw/rdw.service';

@Component({
  selector: 'app-car-management-dialog',
  templateUrl: './car-management-dialog.component.html',
  styleUrls: ['./car-management-dialog.component.less']
})
export class CarManagementDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private rdwService: RdwService,
    public dialogRef: MatDialogRef<CarManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  retrieveCarData() {
    this.rdwService.getByLicensePlateNumber('32LPVV').subscribe(data => {
      console.log(data);
    });
    console.log('getting car data');
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
