import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class BrpService {
  constructor(private http: HttpClient) {}

  private readonly brpServiceUrl = "http://brp.fontys-project.nl/graphql";

  private getIdQuery(id: string) {
    return `query {
                    person(id: ${id})
                    {
                      id
                      bsn
                      gegeven_naam
                      achternaam
                      geboortedatum
                      straat
                      postcode
                      woonplaats
                      land
                      emailadres
                    }
                }`;
  }

  private getBsnQuery(bsn: string) {
    return `query {
                    person(bsn: ${bsn})
                    {
                      id
                      bsn
                      gegeven_naam
                      achternaam
                      geboortedatum
                      straat
                      postcode
                      woonplaats
                      land
                      emailadres
                    }
                }`;
  }

  public getPersonByBsn(bsn: string): Observable<Person> {
    const queryUrl = this.brpServiceUrl + `?query=${this.getBsnQuery(bsn)}`;
    return this.getPersonByQuery(queryUrl);
  }

  public getPersonByBrpId(id: number): Observable<Person> {
    const queryUrl = this.brpServiceUrl + `?query=${this.getIdQuery(id.toString())}`;
    return this.getPersonByQuery(queryUrl);
  }

  private getPersonByQuery(queryUrl: string): Observable<Person> {
    return this.http.get<BrpRootObject>(queryUrl).pipe(
      map((value: BrpRootObject) => {
        return {
          id: value.data.person.id,
          bsn: value.data.person.bsn,
          gegeven_naam: value.data.person.gegeven_naam,
          achternaam: value.data.person.achternaam,
          geboortedatum: value.data.person.geboortedatum,
          straat: value.data.person.straat,
          postcode: value.data.person.postcode,
          woonplaats: value.data.person.woonplaats,
          land: value.data.person.land,
          emailadres: value.data.person.emailadres
        };
      })
    );
  }
}

export interface Person {
  id: number;
  bsn: string;
  gegeven_naam: string;
  achternaam: string;
  geboortedatum: string;
  straat: string;
  postcode: string;
  woonplaats: string;
  land: string;
  emailadres: string;
}

export interface Data {
  person: Person;
}

export interface BrpRootObject {
  data: Data;
}
