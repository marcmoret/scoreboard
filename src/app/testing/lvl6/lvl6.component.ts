import { Component, OnInit, Directive, Output } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-lvl6',
  templateUrl: './lvl6.component.html',
  styleUrls: ['./lvl6.component.css']
})
@Directive({selector: 'button[counting]'})
export class Lvl6Component implements OnInit {
  checke: any;
  bigTest;

  constructor() { }

  ngOnInit() {

  }

  test;

  numberOfClicks = 0;

  calc(){
    console.log(this.test)
    this.test = this.wipeout(this.test)
    
  }

  onClick(){
    this.test = this.test + .67;
    console.log(this.checke);

  }
  wipeout(value: string){
    let rawValue = value ? value : '0.00';

    // Remove non-digit characters
    rawValue = value.replace(/([^\d])/g, '');

    // Add decimal point
    // NOTE: For some reason the decimal/comma point (from the parameter value)
    // is placed at the third position from last instead of second from last as it should be
    const decimalPoint = '.';
    const decimalPosition = rawValue.length - 2;

    if (!rawValue || /^(0[\.\,])?0+$/.test(rawValue)) { // Matches: 0... - 0,00... - 0.00...
      rawValue = '0.00';
    } else {
      rawValue = [
        rawValue.slice(0, decimalPosition),
        decimalPoint,
        rawValue.length === 1 ? '0' : '',
        rawValue.slice(decimalPosition)
      ].join('');
    }
    console.log(parseFloat(rawValue).toFixed(2))
    return parseFloat(rawValue).toFixed(2);

  // return thing = thing + ' mhm ';
  }

 }

