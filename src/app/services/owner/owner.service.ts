import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from 'src/entities/Owner';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl = 'api/owners';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Owner>> {
    return this.http.get<Owner[]>(this.baseUrl);
  }

   public getById(id: UUID): Observable<Owner> {
     return this.http.get<Owner>(this.baseUrl + '/' + id);
   }

   public add(owner: Owner) {
     return this.http.put<Owner>(this.baseUrl, owner);
   }

}
