import { UUID } from 'angular2-uuid';

export class PersonalInfo {
    public id: UUID = UUID.UUID();
    public FirstName: string;
    public LastName: string;
    public DateOfBirth: Date;
    public Streetname: string;
    public Housenumber: string;
    public Zipcode: string;
    public City: string;
    public Country: string;

    constructor(firstName: string,
        lastName: string,
        dateOfBirth: Date,
        streetname: string,
        housenumber: string,
        zipcode: string,
        city: string,
        country: string, ) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DateOfBirth = dateOfBirth;
        this.Streetname = streetname;
        this.Housenumber = housenumber;
        this.Zipcode = zipcode;
        this.City = city;
        this.Country = country;
    }
}