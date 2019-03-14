import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tracker } from 'src/entities/Tracker';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

private baseUrl = 'api/trackers'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Tracker>> {
    return this.http.get<Tracker[]>(this.baseUrl);
  }

   public getById(id: UUID): Observable<Tracker> {
     return this.http.get<Tracker>(this.baseUrl + '/' + id);
   }

   public add(tracker: Tracker) {
     return this.http.put<Tracker>(this.baseUrl, tracker);
   }
}
