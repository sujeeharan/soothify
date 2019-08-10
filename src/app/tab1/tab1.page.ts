import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../consultant-service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data: any;

  ngOnInit() {
    this.consultantService.getJSON().subscribe(data => {
      this.data = data;
  });
}

  questions : any[];

  constructor(private consultantService : ConsultantService ) {
    
  }
  

}
