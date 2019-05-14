import { Car } from './Car';
import { PersonalInfo } from './PersonalInfo';
import { BaseEntity } from './BaseEntity';

export class Owner extends BaseEntity {
    public emailAddress: string;
    public PersonalInfo: PersonalInfo;
    public Cars: Array<Car>;

    constructor(
        emailAddress: string,
        personalInfo: PersonalInfo,
        cars: Array<Car> = new Array<Car>()
    ) {
        super();
        this.emailAddress = emailAddress;
        this.PersonalInfo = personalInfo;
        this.Cars = cars;
    }
}
