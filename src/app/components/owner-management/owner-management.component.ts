import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Owner } from 'src/entities/Owner';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { PersonalInfo } from 'src/entities/PersonalInfo';
import { OwnerManagementAddEditDialog } from './owner-management-addedit-dialog/owner-management-addedit-dialog.component';
import { OwnerManagementDeleteDialog } from './owner-management-delete-dialog/owner-management-delete-dialog.component';

@Component({
  selector: 'rr-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.less']
})
export class OwnerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private displayedColumns: string[] = ['fullName', 'address', 'country', 'actions'];
  private dataSource: MatTableDataSource<Owner> = new MatTableDataSource<Owner>();

  constructor(private ownerService: OwnerService,
    public AddEditDialog: MatDialog,
    public DeleteDialog: MatDialog) { }

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

    const dialogRef = this.AddEditDialog.open(OwnerManagementAddEditDialog, { width: '500px', data: emptyOwner });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.save(result).subscribe(x => this.getData());
      } else {
        this.getData();
      }
    });
  }

  openEditOwnerDialog(owner: Owner) {
    const dialogRef = this.AddEditDialog.open(OwnerManagementAddEditDialog, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.save(result).subscribe(x => this.getData());
      } else {
        this.getData();
      }
    });
  }

  openDeleteOwnerDialog(owner: Owner) {
    const dialogRef = this.DeleteDialog.open(OwnerManagementDeleteDialog, { width: '500px', data: owner, });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        console.log("aa")
        this.ownerService.delete(result.id).subscribe(x => this.getData());
      } else {
        console.log("bb")
        this.getData();
      }
    });
  }
}
