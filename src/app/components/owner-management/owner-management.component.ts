import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Owner } from 'src/entities/Owner';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { PersonalInfo } from 'src/entities/PersonalInfo';
import { OwnerManagementAddEditDialog } from './owner-management-addedit-dialog/owner-management-addedit-dialog.component';
import { OwnerManagementDeleteDialog } from './owner-management-delete-dialog/owner-management-delete-dialog.component';
import { OwnerManagementAssignCarDialog } from './owner-management-assigncar-dialog/owner-management-assigncar-dialog.component';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'rr-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.less']
})
export class OwnerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private displayedColumns: string[] = ['fullName', 'address', 'country','numberofcars', 'actions'];
  private dataSource: MatTableDataSource<Owner> = new MatTableDataSource<Owner>();

  constructor(private ownerService: OwnerService,
    private carService: CarService,
    public matDialog: MatDialog, ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ownerService.findAll().subscribe(owners => {
      this.dataSource = new MatTableDataSource<Owner>(owners);
      this.dataSource.paginator = this.paginator;
    });
  }

  openAddOwnerDialog() {
    const emptyOwner: Owner = new Owner(new PersonalInfo("", "", new Date(), "", "", "", "", ""));

    const dialogRef = this.matDialog.open(OwnerManagementAddEditDialog, { width: '500px', data: emptyOwner });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.save(result).subscribe(x => this.getData());
      } else {
        this.getData();
      }
    });
  }

  openEditOwnerDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementAddEditDialog, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.save(result).subscribe(x => this.getData());
      } else {
        this.getData();
      }
    });
  }

  openDeleteOwnerDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementDeleteDialog, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.delete(result.id).subscribe(x => this.getData());
      } else {
        this.getData();
      }
    });
  }

  openAssignCarDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementAssignCarDialog, { width: '500px', data: owner });

    dialogRef.afterClosed().subscribe(result => {
      // If we received a result and the owner doesn't already own this car
      if (result && owner.Cars.filter(car => car.id === result.id).length! > 0) {
        // Assign the car to the owner
        owner.Cars.push(result);

        // Save the owner
        this.ownerService.save(owner).subscribe(x => {
          // Refresh dataset
          this.getData();
        });

      }
    });
  }
}
