import { UUID } from 'angular2-uuid';

export class Tracker {
    public id: UUID;
    public Manifacturer: string;
    public ActivationDate: Date;

    constructor(manifacturer: string,
        activationDate: Date = new Date()) {
        this.id = UUID.UUID();
        this.Manifacturer = manifacturer;
        this.ActivationDate = activationDate;
    }
}