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
                    personById(id: ${id})
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
    return `query{personByBsn(bsn:"${bsn}"){id bsn gegeven_naam achternaam geboortedatum straat postcode woonplaats land emailadres}}`;
  }

  public getPersonByBsn(bsn: string): Observable<Person> {
    const queryUrl = this.brpServiceUrl + `?query=${this.getBsnQuery(bsn)}`;
    console.log(queryUrl);
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
          id: value.data.personByBsn.id,
          bsn: value.data.personByBsn.bsn,
          gegeven_naam: value.data.personByBsn.gegeven_naam,
          achternaam: value.data.personByBsn.achternaam,
          geboortedatum: value.data.personByBsn.geboortedatum,
          straat: value.data.personByBsn.straat,
          postcode: value.data.personByBsn.postcode,
          woonplaats: value.data.personByBsn.woonplaats,
          land: value.data.personByBsn.land,
          emailadres: value.data.personByBsn.emailadres
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
  personByBsn: Person;
}

export interface BrpRootObject {
  data: Data;
}
