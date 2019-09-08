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
// Uvindu's Back end
   public getJSON(): Observable<any> {
     return this.http.get("http://127.0.0.1:5000/questions/");
   }

   //Submit answers to Backend
   public postAnswers(answer): Observable<any> {
     return this.http.post("http://127.0.0.1:5000/submit/", {ans : answer})
   }

   //Personal Disorder Questions
   public getPersonalQuestions(): Observable<any> {
     return this.http.post("http://127.0.0.1.:5000/Personalquestions", {
       ans: 
     })
   }

}
