import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { BaseEntity } from 'src/entities/BaseEntity';
import { HttpClient } from '@angular/common/http';

export abstract class CrudService<T extends BaseEntity>{
    constructor(
        public baseUrl: string,
        private http: HttpClient) {
        this.baseUrl = baseUrl;
    }

    public save(object: T) {
        this.http.post(this.baseUrl, object);
    }

    public update(object: T) {
        this.http.put(this.baseUrl + '/' + object.id, object);
    }

    public findOne(id: UUID): Observable<T> {
        return this.http.get<T>(this.baseUrl + '/' + id);
    }

    public findAll(): Observable<Array<T>> {
        return this.http.get<T[]>(this.baseUrl);
    }

    public delete(id: UUID) {
        this.http.delete(this.baseUrl + '/' + id);
    }
}