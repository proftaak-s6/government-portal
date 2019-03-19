import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Owner } from 'src/entities/Owner';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { PersonalInfo } from 'src/entities/PersonalInfo';
import { OwnerManagementDialogComponent } from './owner-management-dialog/owner-management-dialog.component';
import { OwnerManagementDeleteDialogComponent } from './owner-management-delete-dialog/owner-management-delete-dialog.component';
import { OwnerManagementAssignCarDialogComponent } from './owner-management-assigncar-dialog/owner-management-assigncar-dialog.component';

@Component({
  selector: 'rr-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.less']
})
export class OwnerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private displayedColumns: string[] = ['fullName', 'address', 'country', 'numberofcars', 'actions'];
  private dataSource: MatTableDataSource<Owner> = new MatTableDataSource<Owner>();

  constructor(
    private ownerService: OwnerService,
    public matDialog: MatDialog,
    private matSnackBar: MatSnackBar, ) { }

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
    this.openEditOwnerDialog(new Owner(new PersonalInfo("", "", new Date(), "", "", "", "", "")));
  }

  openEditOwnerDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementDialogComponent, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.save(result).subscribe(_ => {
          this.notify("De bestuurder " + owner.PersonalInfo.FirstName + " " + owner.PersonalInfo.LastName + " is succesvol opgeslagen.");
          this.getData();
        });
      } else {
        this.getData();
      }
    });
  }

  openDeleteOwnerDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementDeleteDialogComponent, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.delete(result.id).subscribe(_ => {
          this.notify("De bestuurder " + owner.PersonalInfo.FirstName + " " + owner.PersonalInfo.LastName + " is succesvol verwijderd.");
          this.getData();
        });
      } else {
        this.getData();
      }
    });
  }

  openAssignCarDialog(owner: Owner) {
    const dialogRef = this.matDialog.open(OwnerManagementAssignCarDialogComponent, { width: '500px', data: owner });

    dialogRef.afterClosed().subscribe(result => {
      // If we received a result and the owner doesn't already own this car
      if (result) {
        if (owner.Cars.filter(car => car.id === result.id).length === 0) {
          // Assign the car to the owner
          owner.Cars.push(result);

          // Save the owner
          this.ownerService.save(owner).subscribe(x => {
            // Refresh dataset
            this.getData();
          });
        } else {
          this.notify("Deze auto is al toegewezen aan een bestuurder")
        }
      } else {
        this.notify("Geen auto geselecteerd");
      }
    });
  }

  private notify(message: string, secondsOfWaiting: number = 5) {
    this.matSnackBar.open(message, "close", {
      duration: secondsOfWaiting * 1000,
    });
  }
}
