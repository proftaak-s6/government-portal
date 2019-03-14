import { Injectable } from '@angular/core';
import { Car } from 'src/entities/Car';
import { CrudService } from '../_crud/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService extends CrudService<Car>{
  constructor(private _http: HttpClient) {
    super('api/cars', _http);
  }
}