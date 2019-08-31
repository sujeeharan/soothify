import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../consultant-service';
import { QuestionsService } from '../questions.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data: any;

  questions: any[];

  checkedQuestion: Array<BigInteger>;

  scoreMap = new Map();

  personalMap = new Map();

  totalScore = 0;
  personalTotal=0;

  answer = '';
  personalDisorder : any[] = [];
  
  ishidden =false;
  questionsHide = true;
  personalDetails = true;
  personalDisorderHide = true;

  ngOnInit() {
    this.questionsService.getJSON().subscribe(data => {
      this.questions = data.data;
      console.log(data);

    });
  }


  constructor(private questionsService: QuestionsService) {
    this.hidePopup();
  }

  addScores(question, score) {

    if (!this.scoreMap.has(question)) {
      this.scoreMap.set(question, score);
      this.totalScore = this.totalScore + score;
    }
    else {
      this.scoreMap.delete(question);
      this.scoreMap.set(question, score);
    }
    console.log(this.scoreMap);
  }

  addScores1(question, score) {
    this.personalDisorder[question] = score;
  }

  calculate() {
    this.totalScore = 0

    this.scoreMap.forEach((value: number, key: number) => {
      this.totalScore = this.totalScore + value;
      console.log(value);
    })
    if(this.totalScore>21){
      this.showPersonal();
    }  
  }

  calculate1() {
    this.questionsService.postAnswers(this.personalDisorder).subscribe(
      answer => console.log(answer)
    )
  }

  showPersonal(){
    this.questionsHide=true;
    this.personalDisorderHide=false;
    for (var i = 0; i < 15; i++) {
      this.personalDisorder[i]=0;
    }
  }

  hidePopup(){
    const source = timer(5000);
    const subscribe = source.subscribe(
      val => this.hideIShowP(),
    )
  }

  hideIShowP(){
    this.ishidden=true;
    this.personalDetails = false;
  }

  enterDetails(){
    this.personalDetails = true;
    this.questionsHide = false;
  }

  submitAnswer(){
    this.questionsService.postAnswers(this.personalDisorder)
      .subscribe(val => this.answer = val);

  }

}
