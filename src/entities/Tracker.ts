import { UUID } from 'angular2-uuid';
import { BaseEntity } from './BaseEntity';

export class Tracker extends BaseEntity {
    public Manifacturer: string;
    public ActivationDate: Date;

    constructor(
        manifacturer: string,
        activationDate: Date = new Date()
    ) {
        super();
        this.Manifacturer = manifacturer;
        this.ActivationDate = activationDate;
    }
}
