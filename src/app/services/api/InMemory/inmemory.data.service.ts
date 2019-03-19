import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PersonalInfo } from 'src/entities/PersonalInfo';
import { Car } from 'src/entities/Car';
import { Owner } from 'src/entities/Owner';
import { Tracker } from 'src/entities/Tracker';
import { RdwCarResponse, RdwFuelResponse } from '../../rdw/rdw.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const niels_Tracker: Tracker = new Tracker("Tankimax");
    const niels_Car: Car = new Car("TD-NR-98", "Car", "Large", "Biodiesel", "B+", niels_Tracker);

    const bono_PersonalInfo: PersonalInfo =
      new PersonalInfo("Bono", "IJpelaar", new Date(1995, 4, 24), "Enschotsestraat", "111-24", "5014DD", "Tilburg", "The Netherlands");
    const bono_Tracker: Tracker = new Tracker("DTP");
    const bono_Car: Car = new Car("32-LP-VV", "Car", "Medium", "Benzine", "B-", bono_Tracker);
    const bono_Owner: Owner = new Owner(bono_PersonalInfo, new Array<Car>(bono_Car));

    const reinoud_PersonalInfo: PersonalInfo =
      new PersonalInfo("Reinoud", "van Zoelen", new Date(1995, 5, 22), "Hertogensingel", "31", "5341AB", "Oss", "The Netherlands");
    const reinoud_Tracker: Tracker = new Tracker("ACG");
    const reinoud_Car: Car = new Car("OMG-WTF", "Car", "Small", "Diesel", "A+", reinoud_Tracker);
    const reinoud_Owner: Owner = new Owner(reinoud_PersonalInfo, new Array<Car>());

    const trackers: Tracker[] = [bono_Tracker, reinoud_Tracker, niels_Tracker];
    const cars: Car[] = [bono_Car, reinoud_Car, niels_Car];
    const owners: Owner[] = [bono_Owner, reinoud_Owner];
    const rdw_car: RdwCarResponse[] = [
      { cilinderinhoud: "1200", kenteken: "22LDAP", voertuigsoort: "Personenauto", zuinigheidslabel: "B" },
      { cilinderinhoud: "1000", kenteken: "12PTRV", voertuigsoort: "Personenauto", zuinigheidslabel: "B" },
      { cilinderinhoud: "900", kenteken: "HPTT12", voertuigsoort: "Bus", zuinigheidslabel: "B" },
      { cilinderinhoud: "1400", kenteken: "GP23HH", voertuigsoort: "Personenauto", zuinigheidslabel: "B" }
    ];
    const rdw_fuel: RdwFuelResponse[] = [
      { kenteken: '22LDAP', brandstof_omschrijving: "Benzine" },
      { kenteken: '12PTRV', brandstof_omschrijving: "Benzine" },
      { kenteken: 'HPTT12', brandstof_omschrijving: "Gas" },
      { kenteken: 'GP23HH', brandstof_omschrijving: "Diesel" },
    ]

    return {
      cars: cars,
      owners: owners,
      trackers: trackers,
      rdw_car: rdw_car,
      rdw_fuel: rdw_fuel
    };
  }
}
