import { Component, OnInit, ViewChild } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker/tracker.service';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tracker } from 'src/entities/Tracker';

@Component({
  selector: 'rr-tracker-management',
  templateUrl: './tracker-management.component.html',
  styleUrls: ['./tracker-management.component.less']
})
export class TrackerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private dataSource: MatTableDataSource<Tracker> = new MatTableDataSource<Tracker>();
  private displayedColumns: string[] = ['manifacturer', 'activationDate', 'actions']

  constructor(private trackerService: TrackerService,
    private matDialog: MatDialog) { }

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

  }

  onEditClick(tracker: Tracker) {

  }

  onDeleteClick(tracker: Tracker) {

  }

}
