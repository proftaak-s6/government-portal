import { Component, OnInit, Inject } from '@angular/core';
import { Tracker } from 'src/entities/Tracker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'rr-tracker-management-delete-dialog',
  templateUrl: './tracker-management-delete-dialog.component.html',
  styleUrls: ['./tracker-management-delete-dialog.component.less']
})
export class TrackerManagementDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrackerManagementDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tracker) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

}
