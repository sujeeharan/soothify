import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../consultant-service';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data: any;

  
  ngOnInit() {
    this.questionsService.getJSON().subscribe(data => {
      this.questions = data.data;
      console.log(data);
  });
}

  questions : any[];

  constructor(private questionsService : QuestionsService ) {
    
  }
  

}
