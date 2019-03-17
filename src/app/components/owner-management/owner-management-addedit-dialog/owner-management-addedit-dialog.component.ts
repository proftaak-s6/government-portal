import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Owner } from 'src/entities/Owner';

@Component({
  selector: 'rr-owner-management-addedit-dialog',
  templateUrl: './owner-management-addedit-dialog.component.html',
  styleUrls: ['./owner-management-addedit-dialog.component.less']
})
export class OwnerManagementAddEditDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OwnerManagementAddEditDialog>,
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
