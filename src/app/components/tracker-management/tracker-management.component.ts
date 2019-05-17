import { Component, OnInit, ViewChild } from '@angular/core';
import { TrackerService } from 'src/services/tracker.service';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Tracker } from 'src/entities/Tracker';
import { TrackerManagementDeleteDialogComponent } from './tracker-management-delete-dialog/tracker-management-delete-dialog.component';
import { TrackerManagementDialogComponent } from './tracker-management-dialog/tracker-management-dialog.component';

@Component({
  selector: 'rr-tracker-management',
  templateUrl: './tracker-management.component.html',
  styleUrls: ['./tracker-management.component.less']
})
export class TrackerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private dataSource: MatTableDataSource<Tracker> = new MatTableDataSource<Tracker>();
  private displayedColumns: string[] = ['manifacturer', 'activationDate', 'actions']

  constructor(
    private trackerService: TrackerService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.trackerService.findAll().subscribe(trackers => {
      this.dataSource = new MatTableDataSource<Tracker>(trackers);
      this.dataSource.paginator = this.paginator;
    });
  }

  onAddClick() {
    this.onEditClick(new Tracker("", new Date()))
  }

  onEditClick(tracker: Tracker) {
    const dialogRef = this.matDialog.open(TrackerManagementDialogComponent, {
      width: '500px',
      data: tracker
    });

    dialogRef.afterClosed().subscribe((result: Tracker) => {
      if (result) {
        this.trackerService.save(result).subscribe(_ => {
          this.notify("De tracker is opgeslagen.");
          this.getData()
        });
      } else {
        this.getData();
      }
    });
  }

  onDeleteClick(tracker: Tracker) {
    const dialogRef = this.matDialog.open(TrackerManagementDeleteDialogComponent, {
      width: '500px',
      data: tracker
    });

    dialogRef.afterClosed().subscribe((result: Tracker) => {
      if (result) {
        this.trackerService.delete(result.id).subscribe(_ => {
          this.notify("De tracker is succesvol verwijderd.");
          this.getData();
        });
      } else {
        this.getData();
      }
    });
  }

  private notify(message: string, secondsOfWaiting: number = 5) {
    this.matSnackBar.open(message, "close", {
      duration: secondsOfWaiting * 1000,
    });
  }
}
