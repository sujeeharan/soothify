import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {

  data:any;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data=> {
      console.log(data);
      
    });
   }

   public getJSON(): Observable<any> {
     return this.http.get("http://127.0.0.1:5000/questions/");
   }

   public postAnswers(answer): Observable<any> {
     return this.http.post("http://127.0.0.1:5000/submit/", {ans : answer})
   }

}
