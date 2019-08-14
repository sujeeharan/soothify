import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment, Circle } from '@ionic-native/google-maps/ngx';
import { fromEventPattern } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ILatLng, Marker } from '@ionic-native/google-maps/ngx';
import { GoogleMapOptions } from '@ionic-native/google-maps';


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
  
  

  constructor(private platform: Platform) { }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_RELEASE': 'AIzaSyAuwf7K_hn-vY0Ea2RtiBR2OEV1o0ousbw'
    });
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 6.9,
           lng: 79
         },
         zoom: 18,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map_canvas');
    
    let marker: Marker = this.map.addMarkerSync({
      title: 'You are here',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 6.9,
        lng: 79
      }
    });
    let circle : Circle = this.map.addCircleSync({
      'center':this.center,
      'radius': this.radius,
      'strokeColor': '#AA00FF',
      'strokeWidth':5,
       'fillColor': '#00880055'
     });
  }

  center: ILatLng = { "lat": 6.9, "lng": 79 };

  radius = 300;

}
