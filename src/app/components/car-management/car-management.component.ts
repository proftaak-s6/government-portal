import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CarManagementDialogComponent } from './car-management-dialog/car-management-dialog.component';

export interface Car {
  licensePlateNumber: string;
  carType: string;
  engineType: string;
  fuelType: string;
  energyLabel: string;
}

const CAR_DATA: Car[] = [
  { licensePlateNumber: 'TD-NR-98', carType: 'sedan', engineType: '1.2l', fuelType: 'Diesel', energyLabel: 'D' },
  { licensePlateNumber: '32-LP-VV', carType: 'hatchback', engineType: '1.2l', fuelType: 'Benzine', energyLabel: 'C' }
];

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.less']
})
export class CarManagementComponent implements OnInit {

  @ViewChild(MatPaginator)paginator: MatPaginator;

  displayedColumns: string[] = ['licensePlateNumber', 'carType', 'engineType', 'fuelType', 'energyLabel', 'actions'];
  public dataSource: MatTableDataSource<Car>;

  constructor(private carDialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataSource = new MatTableDataSource<Car>(CAR_DATA);
    this.dataSource.paginator = this.paginator;
  }

  openAddCarDialog() {
    const dialogRef = this.carDialog.open(CarManagementDialogComponent, {
      width: '400px'
    });
  }

  openDeleteCarDialog() {
    console.log('clicked Delete Car');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
