import { BaseEntity } from './BaseEntity';

export class PersonalInfo extends BaseEntity {
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public streetname: string;
    public housenumber: string;
    public zipcode: string;
    public city: string;
    public country: string;

    constructor(
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        streetname: string,
        housenumber: string,
        zipcode: string,
        city: string,
        country: string
    ) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.streetname = streetname;
        this.housenumber = housenumber;
        this.zipcode = zipcode;
        this.city = city;
        this.country = country;
    }
}
