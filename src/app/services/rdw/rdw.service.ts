import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Car } from 'src/entities/Car';

export interface RdwCarResponse {
  kenteken: string;
  voertuigsoort: string;
  cilinderinhoud: string;
  zuinigheidslabel: string;
}

export interface RdwFuelResponse {
  brandstof_omschrijving: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'X-App-Token': '6LlkP0MqOKimMkNdqipMXxOZN',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RdwService {

  private generalUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  private fuelUrl = 'https://opendata.rdw.nl/resource/8ys7-d773.json';

  constructor(private http: HttpClient) { }

  getCarByLicensePlateNumber(licensePlateNumber: string): Observable<RdwCarResponse> {

    return this.http.get<RdwCarResponse[]>(`${this.generalUrl}?kenteken=${licensePlateNumber}`, httpOptions)
      .pipe(
        map((value: RdwCarResponse[]) => {
          return {
            kenteken: value[0].kenteken,
            voertuigsoort: value[0].voertuigsoort,
            cilinderinhoud: value[0].cilinderinhoud,
            zuinigheidslabel: value[0].zuinigheidslabel
          };
        })
      );
  }

  getFuelByLicensePlateNumber(licensePlateNumber: string): Observable<RdwFuelResponse> {
    return this.http.get<RdwFuelResponse[]>(`${this.fuelUrl}?kenteken=${licensePlateNumber}`, httpOptions)
      .pipe(
        map((value: RdwFuelResponse[]) => {
          return {
            brandstof_omschrijving: value[0].brandstof_omschrijving
          };
        })
      )
  }
}
