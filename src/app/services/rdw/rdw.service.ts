import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdwService {

  private generalUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  private fuelUrl = 'https://opendata.rdw.nl/resource/vezc-m2t6.json';

  constructor(private http: HttpClient) { }

  getByLicensePlateNumber(licensePlateNumber: string): Observable<object> {
    return this.http.get<object>(`${this.generalUrl}?kenteken=${licensePlateNumber}`);
  }
}
