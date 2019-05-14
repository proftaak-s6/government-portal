import { BaseEntity } from './BaseEntity';

export class Tracker extends BaseEntity {
    public manufacturer: string;
    public activationDate: Date;

    constructor(
        manifacturer: string,
        activationDate: Date = new Date()
    ) {
        super();
        this.manufacturer = manifacturer;
        this.activationDate = activationDate;
    }
}
