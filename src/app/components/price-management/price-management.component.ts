import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { PriceManagementEditDialogComponent } from './price-management-edit-dialog/price-management-edit-dialog.component';
import { RoadPrice } from 'src/entities/RoadPrice';
import { PriceService } from 'src/services/price.service';
import { PriceManagementHistoryDialogComponent } from './price-management-history-dialog/price-management-history-dialog.component';
import { RoadPriceHistory } from 'src/entities/RoadPriceHistory';

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: ['./price-management.component.less']
})
export class PriceManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'roadName',
    'price',
    'actions'
  ];

  public dataSource: MatTableDataSource<RoadPrice>;

  constructor(
    private matDialog: MatDialog,
    private priceService: PriceService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.priceService.findAll().subscribe((prices: RoadPrice[]) => {
      // console.log(prices);
      this.dataSource = new MatTableDataSource<RoadPrice>(prices);
      this.dataSource.paginator = this.paginator;
    });
  }

  openEditPriceDialog(roadPrice: RoadPrice) {
    const dialogRef = this.matDialog.open(PriceManagementEditDialogComponent,
      {
        width: '400px',
        data: roadPrice
      }
    );

    dialogRef.afterClosed().subscribe((result: RoadPrice) => {
      if (result) {
        this.priceService.save(result.location, result.priceHistory[0].price).subscribe(res => {
          this.getData();
          this.matSnackBar.open(`Prijs is geupdate voor ${result.location}`, 'sluiten', {
            duration: 5000
          });
        });
      }
    });
  }

  openPriceHistoryDialog(roadPrice: RoadPrice) {
    const dialogRef = this.matDialog.open(PriceManagementHistoryDialogComponent, {
      width: '600px',
      data: roadPrice
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCurrentRoadPrice(priceHistory: RoadPriceHistory[]) {
    return priceHistory[0].price;
  }
}
