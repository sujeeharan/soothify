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

  checkedQuestion: Array<BigInteger>;

  scoreMap = new Map();


  
  totalScore=0;

  constructor(private questionsService : QuestionsService ) {
    
  }
  addScores(question,score){
    
    if (!this.scoreMap.has(question)){
      this.scoreMap.set(question,score);
      this.totalScore = this.totalScore+score;
    }
    else{
      this.scoreMap.delete(question);
      this.scoreMap.set(question,score);
    }
    console.log(this.scoreMap);
  }

  calculate(){
    this.totalScore=0
    for(let value of this.scoreMap.values()){
      
      this.totalScore=this.totalScore+value;
      console.log(value);
    }
    console.log(this.totalScore)
  }

}
