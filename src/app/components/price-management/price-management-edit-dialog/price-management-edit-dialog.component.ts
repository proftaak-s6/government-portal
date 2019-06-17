import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { RoadPrice } from 'src/entities/RoadPrice';

@Component({
  selector: 'app-price-management-edit-dialog',
  templateUrl: './price-management-edit-dialog.component.html',
  styleUrls: ['./price-management-edit-dialog.component.less']
})
export class PriceManagementEditDialogComponent implements OnInit {

  private oldAmount: number;

  constructor(
    public dialogRef: MatDialogRef<PriceManagementEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public roadPrice: RoadPrice,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.oldAmount = this.roadPrice.priceHistory[0].price;
  }

  onSaveClick() {
    if (this.roadPrice.priceHistory[0].price === this.oldAmount) {
      this.matSnackBar.open('Prijs is niet veranderd', 'sluiten', {
        duration: 5000
      });
    } else {
      this.dialogRef.close(this.roadPrice);
    }
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
