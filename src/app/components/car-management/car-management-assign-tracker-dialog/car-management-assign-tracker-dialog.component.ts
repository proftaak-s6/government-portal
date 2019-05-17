import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from 'src/entities/Car';
import { Tracker } from 'src/entities/Tracker';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-car-management-assign-tracker-dialog',
  templateUrl: './car-management-assign-tracker-dialog.component.html',
  styleUrls: ['./car-management-assign-tracker-dialog.component.less']
})
export class CarManagementAssignTrackerDialogComponent implements OnInit {

  trackerControl: FormControl = new FormControl();
  filteredTrackers: Observable<Tracker[]>;

  trackerData: Tracker[];

  // selectData: Tracker[] = [
  //   new Tracker('Philips', new Date()),
  //   new Tracker('Sony', new Date()),
  //   new Tracker('Flipke', new Date()),
  //   new Tracker('IBM', new Date()),
  //   new Tracker('Apple', new Date()),
  //   new Tracker('Ordina', new Date()),
  //   new Tracker('InfoSupport', new Date()),
  //   new Tracker('Fontys', new Date()),
  //   new Tracker('Avans', new Date()),
  //   new Tracker('TaxModel', new Date()),
  //   new Tracker('Jameson', new Date()),
  //   new Tracker('Guinness', new Date())
  // ];

  constructor(
    private trackerService: TrackerService,
    private dialogRef: MatDialogRef<CarManagementAssignTrackerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) { }

  ngOnInit() {
    this.trackerService.findAll().subscribe((trackers: Tracker[]) => {
      this.trackerData = trackers;
      this.filteredTrackers = this.trackerControl.valueChanges
      .pipe(
        startWith<string | Tracker>(''),
        map(value => typeof value === 'string' ? value : value.manufacturer),
        map(manufacturer => manufacturer ? this._filter(manufacturer) : this.trackerData.slice())
      );
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.data);
  }

  displayFn(tracker?: Tracker): string | undefined {
    return tracker ? tracker.manufacturer : undefined;
  }

  private _filter(value: string): Tracker[] {
    const filterValue = value.toLowerCase();

    return this.trackerData.filter(tracker => tracker.manufacturer.toLowerCase().indexOf(filterValue) === 0);
  }

}
