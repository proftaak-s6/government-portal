import { Injectable } from "@angular/core";
import { Car } from "src/entities/Car";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CarService {
  private readonly baseUrl = "http://car.fontys-project.nl/car";

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  public save(car: Car): Observable<Car> {
    console.log("Saving car");
    console.log(car);
    return this.http.put<Car>(this.baseUrl, car);
  }

  public assignNewOwner(brpId: number): Observable<object> {
    return this.http.post(this.baseUrl + "/assignNewOwner", brpId);
  }

  public delete(carId: number): Observable<object> {
    return this.http.delete(this.baseUrl + "/" + carId);
  }
}