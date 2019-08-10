import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps/ngx';
import { fromEventPattern } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  map: GoogleMap;

  async ngOnInit() {
    await this.platform.ready;
    await this.loadMap();
  }

  constructor(private platform:Platform) {}

  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_RELEASE':'AIzaSyAuwf7K_hn-vY0Ea2RtiBR2OEV1o0ousbw'
    });

    this.map = GoogleMaps.create('map_canvas');
  }
}
