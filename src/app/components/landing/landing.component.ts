import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarService } from 'src/app/services/car/car.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'rr-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  constructor(private http: HttpClient,
    private carService: CarService,
    private ownerService: OwnerService,
    private trackerService: TrackerService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(x => {
      console.log(x);
    });

    this.ownerService.getAll().subscribe(x => {
      console.log(x);
    });

    this.trackerService.getAll().subscribe(t => {
      console.log(t);
    });
  }
}