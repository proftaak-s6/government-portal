import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CarManagementDeleteDialogComponent } from './car-management-delete-dialog/car-management-delete-dialog.component';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from 'src/entities/Car';
import { CarManagementCreateDialogComponent } from './car-management-create-dialog/car-management-create-dialog.component';

@Component({
  selector: 'rr-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.less']
})
export class CarManagementComponent implements OnInit {

  @ViewChild(MatPaginator)paginator: MatPaginator;

  displayedColumns: string[] = ['licensePlateNumber', 'carType', 'engineType', 'fuelType', 'energyLabel', 'actions'];
  public dataSource: MatTableDataSource<Car>;

  constructor(private matDialog: MatDialog, private carService: CarService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.carService.findAll().subscribe((cars: Car[]) => {
      this.dataSource = new MatTableDataSource<Car>(cars);
      this.dataSource.paginator = this.paginator;
    });
  }

  openAddCarDialog() {
    const dialogRef = this.matDialog.open(CarManagementCreateDialogComponent, {
      width: '400px',
      data: new Car('', '', '', '', '', null)
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.carService.save(result).subscribe(_ => this.getData());
      } else {
        this.getData();
      }
     });
  }

  openDeleteCarDialog(value: Car) {
    const dialogRef = this.matDialog.open(CarManagementDeleteDialogComponent, {
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
