import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

  AccessGranted = false;
  AccessFailed = false;

  lat: number;
  lng: number;

  error=" ";
  count = 0;
  ip;

  hackz = true;

ngOnInit(){
 
this.AccessGranted = false;

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

passwordCheck(pass){
  if(pass === "test"){
    this.AccessGranted = true;
  }else{
    this.count++;
    switch(this.count) { 
      case 1: { 
        this.error = "nope."
          break; 
      } 
      case 2: { 
        this.error = "try again."
          break; 
      } 
      case 3: {
        this.error = "wrong again."
          break;    
      } 
      case 4: { 
        this.error = "you should give up."
          break; 
      }
      case 5: { 
        this.error = "stop trying to hack me."
          break; 
      }    
      default: { 
        this.hackz = false;
        this.error = "Thats it, calling the cops. Tracing your IP and location..."
        const wait = (ms) => new Promise(res => setTimeout(res, ms));
        const startAsync = async callback => {
          await wait(1000);
          callback(this.error = this.error + ' ...');
          
          await wait(1000);
          callback(this.error = this.error + ' ...');

          await wait(1000);
          callback(this.error = this.error + ' ...');
          
          await wait(1000);
          callback(this.error = this.error + ' LOCATED.');

          await wait(1000);
          callback( this.ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0));
          this.error= this.error + " Traced IP: " + this.ip + " Sending police to this location: ";
          this.AccessFailed = true;

        };
        startAsync(text => console.log());
              break;              
          } 
    }
  }
  
  
  
  
}

}

