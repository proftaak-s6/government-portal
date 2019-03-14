import { Injectable } from '@angular/core';
import { Car } from 'src/entities/Car';
import { Observable } from 'rxjs';
import { InMemoryDataService } from '../api/InMemory/inmemory.data.service';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'api/cars';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Car>> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  public getById(id: UUID): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + '/' + id);
  }

  public add(car: Car) {
    return this.http.put<Car>(this.baseUrl, car);
  }
}
