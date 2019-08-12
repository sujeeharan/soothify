import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  @Input() data:any;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalCtrl.dismiss();
  }
}
