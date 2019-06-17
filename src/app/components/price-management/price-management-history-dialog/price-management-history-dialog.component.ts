import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource } from '@angular/material';
import { RoadPrice } from 'src/entities/RoadPrice';
import { RoadPriceHistory } from 'src/entities/RoadPriceHistory';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-price-management-history-dialog',
  templateUrl: './price-management-history-dialog.component.html',
  styleUrls: ['./price-management-history-dialog.component.less']
})
export class PriceManagementHistoryDialogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'date',
    'time',
    'price'
  ];

  public dataSource: MatTableDataSource<RoadPriceHistory>;

  constructor(
    public dialogRef: MatDialogRef<PriceManagementHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public roadPrice: RoadPrice,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<RoadPriceHistory>(this.roadPrice.priceHistory);
    this.dataSource.paginator = this.paginator;
  }

  onCloseClick() {
    this.dialogRef.close();
  }
  
  toDateFormat(date: Date) {
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  toTimeFormat(date: Date) {
    return this.datePipe.transform(date, 'hh:mm');
  }

}
