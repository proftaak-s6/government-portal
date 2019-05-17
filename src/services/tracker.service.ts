import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tracker } from "src/entities/Tracker";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TrackerService {
  findAll(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  save(result: Tracker): Observable<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: import("angular2-uuid").UUID): Observable<any> {
    throw new Error("Method not implemented.");
  }
  constructor(private _http: HttpClient) {}
}
