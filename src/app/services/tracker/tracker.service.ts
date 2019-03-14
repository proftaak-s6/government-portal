import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tracker } from 'src/entities/Tracker';
import { CrudService } from '../_crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TrackerService extends CrudService<Tracker> {
  constructor(private _http: HttpClient) {
    super('api/trackers', _http)
  }
}
