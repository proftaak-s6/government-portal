import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Owner } from 'src/entities/Owner';

@Component({
  selector: 'rr-owner-management-dialog',
  templateUrl: './owner-management-dialog.component.html',
  styleUrls: ['./owner-management-dialog.component.less']
})
export class OwnerManagementDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OwnerManagementDialog>,
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
