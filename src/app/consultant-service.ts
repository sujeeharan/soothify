import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultantService {

    data: any;

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            
            this.data = data.consultants
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/consultants.json");
    }

}