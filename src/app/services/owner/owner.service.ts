import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from 'src/entities/Owner';
import { CrudService } from '../_crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends CrudService<Owner>{
  constructor(private _http: HttpClient) {
    super('api/owners', _http);
  }
}
