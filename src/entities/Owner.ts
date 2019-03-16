import { Car } from './Car';
import { UUID } from 'angular2-uuid';
import { PersonalInfo } from './PersonalInfo';
import { BaseEntity } from './BaseEntity';

export class Owner extends BaseEntity {
    public personalInfo: PersonalInfo;
    public Cars: Array<Car>;

    constructor(
        personalInfo: PersonalInfo,
        cars: Array<Car> = new Array<Car>()
    ) {
        super();
        this.personalInfo = personalInfo;
        this.Cars = cars;
    }
}