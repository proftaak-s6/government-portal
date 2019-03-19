import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tracker } from 'src/entities/Tracker';

@Component({
  selector: 'rr-tracker-management-dialog',
  templateUrl: './tracker-management-dialog.component.html',
  styleUrls: ['./tracker-management-dialog.component.less']
})
export class TrackerManagementDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrackerManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tracker) {
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.data);
  }


}
