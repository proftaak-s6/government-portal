import { Car } from './Car';
import { UUID } from 'angular2-uuid';
import { PersonalInfo } from './PersonalInfo';

export class Owner {
    public id: UUID;
    public personalInfo: PersonalInfo;
    public Cars: Array<Car>;

    constructor(
        personalInfo: PersonalInfo,
        cars: Array<Car> = new Array<Car>()
    ) {
        this.id = UUID.UUID();
        this.personalInfo = personalInfo;
        this.Cars = cars;
    }
}