import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tracker } from "src/entities/Tracker";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TrackerService {
  private readonly baseUrl = "http://car.fontys-project.nl/tracker";

  findAll(): Observable<any> {
    return this.http.get<Tracker[]>(this.baseUrl);
  }

  findAvailable(): Observable<Tracker[]> {
    return this.http.get<Tracker[]>(this.baseUrl + "/available");
  }

  save(tracker: Tracker): Observable<any> {
    return this.http.post<Tracker>(this.baseUrl, tracker);
  }

  edit(tracker: Tracker): Observable<any> {
    return this.http.put<Tracker>(this.baseUrl, tracker);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  assign(carId: number, trackerId: number) {
    return this.http.put(this.baseUrl + '/assign/' + trackerId + '/to/' + carId, {trackerId, carId});
  }

  constructor(private http: HttpClient) {}
}
