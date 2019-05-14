import { Tracker } from './Tracker';
import { BaseEntity } from './BaseEntity';

export class Car extends BaseEntity {
    public licensePlateNumber: string;
    public vehicleType: string;
    public engineType: string;
    public fuelType: string;
    public energyLabel: string;
    public tracker: Tracker;

    constructor(
        licensePlateNumber: string,
        vehicleType: string,
        engineType: string,
        fuelType: string,
        energyLabel: string,
        tracker: Tracker,
    ) {
        super();
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleType = vehicleType;
        this.engineType = engineType;
        this.fuelType = fuelType;
        this.energyLabel = energyLabel;
        this.tracker = tracker;
    }
}
