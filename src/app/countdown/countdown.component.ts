import { CollageModalComponent } from './collage-modal/collage-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  public effectOn: boolean;
  public timerFunction: any;
  public countDownDate:any = new Date("April 21, 2019 00:00:00");
  public timerOn: boolean;
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: 'auto',
    height: 'auto',
    position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
    }
  }
 
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // Set the date we're counting down to
  this.countDownDate.getTime();

  // Update the count down every 1 second
  this.timerFunction = setInterval(() => {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = this.countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(document.getElementById("demo") != null){
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + "Until FU Vince Day!";
  } 
    

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(this.timerFunction);
    this.effectOn = true;
    this.timerOn = false;
    const wait = (ms) => new Promise(res => setTimeout(res, ms));
    const startAsync = async callback => {
      await wait(6500);
      callback(this.effectOn = false, this.timerOn = true, this.openDialog());
    };
    startAsync(text => console.log());
    }else{
      this.timerOn = true;
    }
  }, 1000);


    

  }// end onInit

  

  openDialog(): void {
    const dialogRef = this.dialog.open(
      CollageModalComponent, this.config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}