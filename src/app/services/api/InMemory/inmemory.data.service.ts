import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PersonalInfo } from 'src/entities/PersonalInfo';
import { Car } from 'src/entities/Car';
import { Owner } from 'src/entities/Owner';
import { Tracker } from 'src/entities/Tracker';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bono_PersonalInfo: PersonalInfo =
      new PersonalInfo("Bono", "IJpelaar", new Date(1995, 4, 24), "Enschotsestraat", "111-24", "5014DD", "Tilburg", "The Netherlands");
    const bono_Tracker: Tracker = new Tracker("DTP");
    const bono_Car: Car = new Car("GG-WP-69", "Car", "Medium", "Benzine", "B-", bono_Tracker);
    const bono_Owner: Owner = new Owner(bono_PersonalInfo, new Array<Car>(bono_Car));

    const reinoud_PersonalInfo: PersonalInfo =
      new PersonalInfo("Reinoud", "van Zoelen", new Date(1995, 5, 22), "Hertogensingel", "31", "5341AB", "Oss", "The Netherlands");
    const reinoud_Tracker: Tracker = new Tracker("ACG");
    const reinoud_Car: Car = new Car("OMG-WTF", "Car", "Small", "Diesel", "A+", reinoud_Tracker);
    const reinoud_Owner: Owner = new Owner(reinoud_PersonalInfo, new Array<Car>(reinoud_Car));

    const trackers: Tracker[] = [bono_Tracker, reinoud_Tracker]
    const owners: Owner[] = [bono_Owner, reinoud_Owner];
    const cars: Car[] = [bono_Car, reinoud_Car];

    return {
      cars: cars,
      owners: owners,
      trackers: trackers
    };
  }
}
