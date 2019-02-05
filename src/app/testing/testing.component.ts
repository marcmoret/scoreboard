import { Component, OnInit } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})


export class TestingComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number;
  lng: number;

  ngOnInit() {

    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
   

  }
  setPosition(event){
      this.lat = event.coords.latitude;
      this.lng = event.coords.longitude;
      console.log( "Latitude: " +event.coords.latitude +
      "Longitude: " + event.coords.longitude );
  }
  
}
