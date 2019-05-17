import { Tracker } from "./Tracker";
import { OwnershipHistory } from "./OwnershipHistory";

export class Car {
  public id: number;
  public ownerId: number;
  public ownershipHistoryList: OwnershipHistory[];
  public licensePlateNumber: string;
  public vehicleType: string;
  public engineType: string;
  public fuelType: string;
  public energyLabel: string;
  public tracker: Tracker;
  public brand: string;
  public series: string;
}
