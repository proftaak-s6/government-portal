import { Car } from './Car';
import { PersonalInfo } from './PersonalInfo';
import { BaseEntity } from './BaseEntity';

export class Owner extends BaseEntity {
    public personalInfo: PersonalInfo;
    public cars: Array<Car>;

    constructor(
        personalInfo: PersonalInfo,
        cars: Array<Car> = new Array<Car>()
    ) {
        super();
        this.personalInfo = personalInfo;
        this.cars = cars;
    }
}
