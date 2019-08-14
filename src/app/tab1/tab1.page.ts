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

  totalScore = 0;
  
  ishidden =false;
  questionsHide = true;
  personalDetails = true;

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

  calculate() {
    this.totalScore = 0

    this.scoreMap.forEach((value: number, key: number) => {
      this.totalScore = this.totalScore + value;
      console.log(value);
    })
    console.log(this.totalScore);

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


}
