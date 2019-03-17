import { Car } from './Car';
import { UUID } from 'angular2-uuid';
import { PersonalInfo } from './PersonalInfo';
import { BaseEntity } from './BaseEntity';

export class Owner extends BaseEntity {
    public PersonalInfo: PersonalInfo;
    public Cars: Array<Car>;

    constructor(
        personalInfo: PersonalInfo,
        cars: Array<Car> = new Array<Car>()
    ) {
        super();
        this.PersonalInfo = personalInfo;
        this.Cars = cars;
    }
}