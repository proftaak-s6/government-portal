import { UUID } from 'angular2-uuid';

export abstract class BaseEntity {
    public id: UUID = UUID.UUID();
}