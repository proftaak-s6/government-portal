import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog,
  MatSnackBar
} from "@angular/material";
import { CarManagementDeleteDialogComponent } from "./car-management-delete-dialog/car-management-delete-dialog.component";
import { CarService } from "src/services/car.service";
import { Car } from "src/entities/Car";
import { CarManagementCreateDialogComponent } from "./car-management-create-dialog/car-management-create-dialog.component";
import { CarManagementAssignOwnerDialogComponent } from "./car-management-assign-owner-dialog/car-management-assign-owner-dialog.component";
import { CarManagementAssignTrackerDialogComponent } from './car-management-assign-tracker-dialog/car-management-assign-tracker-dialog.component';

@Component({
  selector: "rr-car-management",
  templateUrl: "./car-management.component.html",
  styleUrls: ["./car-management.component.less"]
})
export class CarManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    "licensePlateNumber",
    "carType",
    "engineType",
    "fuelType",
    "energyLabel",
    "brand",
    "series",
    "actions"
  ];
  public dataSource: MatTableDataSource<Car>;

  constructor(
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.carService.findAll().subscribe((cars: Car[]) => {
      this.dataSource = new MatTableDataSource<Car>(cars);
      this.dataSource.paginator = this.paginator;
    });
  }

  openAssignOwnerDialog(car: Car) {
    const dialogRef = this.matDialog.open(
      CarManagementAssignOwnerDialogComponent,
      {
        width: "428px",
        data: car.ownerId
      }
    );

    dialogRef.afterClosed().subscribe((brpId: number) => {
      if (brpId > 0) {
        this.carService.assignNewOwner(brpId).subscribe(
          result => {
            this.notify(
              "Successfully assigned to owner to the car. Refreshing data..."
            );
          },
          err => {
            this.notify("Refreshing data...");
          },
          () => {
            this.getData();
          }
        );
      }
    });
  }

  openAddCarDialog() {
    const dialogRef = this.matDialog.open(CarManagementCreateDialogComponent, {
      width: "400px",
      data: new Car()
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.carService.save(result).subscribe(res => {
          this.notify(
            "De auto met kentekenplaat " +
              result.licensePlateNumber +
              " is toegevoegd."
          );
          this.getData();
        });
      } else {
        this.getData();
      }
    });
  }

  hasTracker(car: Car): boolean {
    return car.tracker ? true : false;
  }

  openAssignTrackerDialog(value: Car) {
    const dialogRef = this.matDialog.open(CarManagementAssignTrackerDialogComponent, {
      width: '400px',
      data: value
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        console.log(result);
        this.getData();
      } else {
        this.getData();
      }
    });
  }

  openDeleteCarDialog(value: Car) {
    const dialogRef = this.matDialog.open(CarManagementDeleteDialogComponent, {
      width: "500px",
      data: value
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.carService.delete(result.id).subscribe(res => {
          this.notify(
            "De auto met kentekenplaat " +
              value.licensePlateNumber +
              " is succesvol verwijderd."
          );
          this.getData();
        });
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

  private notify(message: string, secondsOfWaiting: number = 5) {
    this.matSnackBar.open(message, "close", {
      duration: secondsOfWaiting * 1000
    });
  }
}
