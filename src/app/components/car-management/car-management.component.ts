import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CarManagementDialogComponent } from './car-management-dialog/car-management-dialog.component';
import { Car } from 'src/entities/Car';

const CAR_DATA: Car[] = [
  new Car('TD-NR-98', 'Personenauto', '1299cc', 'Diesel', 'D', null),
  new Car('32-LP-VV', 'Personenauto', '1199cc', 'Benzine', 'C', null)
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
      width: '400px',
      data: new Car('', '', '', '', '', null)
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
