import { Component } from '@angular/core';
import { ConsultantService } from '../consultant-service';
import { ModalController } from '@ionic/angular';
import { RecommendationComponent } from '../recommendation/recommendation.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  con: any;
  //Injecting Service through Constructor Parameter
  constructor(private consultantService: ConsultantService, private modalCtrl: ModalController) {
    this.consultantService.getJSON().subscribe(
      data => {
        this.data = data.psychiatrist;
      }
    )
  }
  data: any;

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    if (ev.detail.value == "psychi") {
      this.consultantService.getJSON().subscribe(
        data => {
          this.data = data.psychiatrist;
        }
      );
      console.log(this.data)
    }
    else {

      this.consultantService.getJSON().subscribe(
        data => {
          this.data = data.consultants;
        }
      );
    }
  }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: RecommendationComponent,
      componentProps: {
        data: this.data.psychiatrist
      }
    })
    await modal.present();
    modal.onDidDismiss().then(
       res => alert(JSON.stringify(res))
    )
  }



}
