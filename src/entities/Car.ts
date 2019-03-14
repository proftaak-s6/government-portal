import { UUID } from 'angular2-uuid';
import { Tracker } from './Tracker';

export class Car {
    public id: UUID;
    public LicensePlateNumber: string;
    public VehicleType: string;
    public EngineType: string;
    public FuelType: string;
    public EnergyLabel: string;
    public Tracker: Tracker;

    constructor(
        licensePlateNumber: string,
        vehicleType: string,
        engineType: string,
        fuelType: string,
        energyLabel: string,
        tracker: Tracker,
    ) {
        this.id = UUID.UUID();
        this.LicensePlateNumber = licensePlateNumber;
        this.VehicleType = vehicleType;
        this.EngineType = engineType;
        this.FuelType = fuelType;
        this.EnergyLabel = energyLabel;
        this.Tracker = tracker;
    }
}