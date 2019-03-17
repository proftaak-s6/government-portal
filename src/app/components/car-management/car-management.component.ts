import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CarManagementDeleteDialogComponent } from './car-management-delete-dialog/car-management-delete-dialog.component';
import { CarService } from 'src/app/services/car/car.service';
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

  constructor(
    private carDialog: MatDialog,
    private carService: CarService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataSource = new MatTableDataSource<Car>(CAR_DATA);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  openAddCarDialog() {
    console.log('clicked Add Car');
  }

  openEditCarDialog() {
    console.log('clicked Edit Car');
  }

  openDeleteCarDialog(value: Car) {
    const dialogRef = this.carDialog.open(CarManagementDeleteDialogComponent, {
      width: '500px',
      data: value
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.carService.delete(result.id).subscribe(_ => this.getData());
      } else {
        this.getData();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
