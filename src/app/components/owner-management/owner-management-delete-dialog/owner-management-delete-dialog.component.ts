import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Owner } from 'src/entities/Owner';

@Component({
  selector: 'rr-owner-management-delete-dialog',
  templateUrl: './owner-management-delete-dialog.component.html',
  styleUrls: ['./owner-management-delete-dialog.component.less']
})
export class OwnerManagementDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OwnerManagementDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Owner) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

}
