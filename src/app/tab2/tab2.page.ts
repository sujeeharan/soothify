import { Component } from '@angular/core';
import { ConsultantService } from '../consultant-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  con: any;
  constructor(private consultantService: ConsultantService) {
    this.consultantService.getJSON().subscribe(
      data=> {
        this.data = data.psychiatrist;
      }
    )
  }
  data: any;

  segmentChanged(ev:any) {
    console.log(ev.detail.value);
    if(ev.detail.value=="psychi"){
      this.consultantService.getJSON().subscribe(
        data => {
          this.data = data.psychiatrist;
        }
      );
      console.log(this.data)
    }
    else{
      
      this.consultantService.getJSON().subscribe(
        data => {
          this.data = data.consultants;
        }
      );
    }
    
  }
}
