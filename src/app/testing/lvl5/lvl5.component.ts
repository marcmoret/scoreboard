import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { PopupComponent } from './popup/popup.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-lvl5',
  templateUrl: './lvl5.component.html',
  styleUrls: ['./lvl5.component.css']
})
export class Lvl5Component implements OnInit {

  animal: string;
  name: string;

  public timer;
  public compareDate = new Date("June 21, 2019 00:00:00");

  active = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(){
  this.compareDate.setDate(this.compareDate.getDate());

  this.timer = setInterval(() => {
    this.timeBetweenDates(this.compareDate);
  }, 1000);

  var array = [2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9];
  console.log(array)
  // var indexx = array.indexOf(5);
  // array.forEach((item, index) =>{
  //   if (indexx > -1) {
  //     array.splice(indexx, 1);
  //   }
  // })

  const result = array.filter(array => array != 5);
  
  console.log(result);

}

  timeBetweenDates(toDate) {

    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();
    
    if (difference <= 0) {

      // Timer done
      clearInterval(this.timer);
      this.active = true;
      this.callback('mhm')
    } else {
      
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      document.getElementById("days").innerHTML = days.toString();
      document.getElementById("hours").innerHTML = hours.toString();
      document.getElementById("minutes").innerHTML = minutes.toString();
      document.getElementById("seconds").innerHTML = seconds.toString();
    }
  }

  callback(thing){
    console.log(thing);
    console.log('thing');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      PopupComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



}
