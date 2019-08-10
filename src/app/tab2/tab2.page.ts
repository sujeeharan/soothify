import { Component } from '@angular/core';
import { ConsultantService } from '../consultant-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private consultantService: ConsultantService) {}
  data: any;

  segmentChanged(ev:any) {
    if(ev.value=="psychi"){
      this.consultantService.getJSON().subscribe(
        data => {
          this.data = data.consultants;
        }
      );
      console.log(this.data)
    }
    
  }
}
