import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoadPrice } from 'src/entities/RoadPrice';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private readonly baseUrl = 'http://pricing.fontys-project.nl/prices';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<RoadPrice[]> {
    return this.http.get<RoadPrice[]>(this.baseUrl);
  }

  public save(location: string, newPrice: number) {
    console.log(location + '-' + newPrice);
    return this.http.put(this.baseUrl + `/${location}`, { price: newPrice });
  }
}
