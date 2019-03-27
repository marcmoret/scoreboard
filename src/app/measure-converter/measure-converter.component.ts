import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-converter',
  templateUrl: './measure-converter.component.html',
  styleUrls: ['./measure-converter.component.css']
})
export class MeasureConverterComponent implements OnInit {

  //base unit of measurement is cup = 1
  measureVal: number;
  selectedUnit: number = 0;
  cups:number = 0;
  ounces:number = 0;
  tablespoon:number = 0;
  teaspoon:number = 0;
  liters:number = 0;
  grams:number = 0;
  units = [
    {"unit":"Cups", "value": 1},
    {"unit":"Grams", "value": 2},
    {"unit":"Teaspoon", "value": 3},
    {"unit":"Tablespoon", "value": 4},
    {"unit":"Litres", "value": 5},
    {"unit":"Ounce", "value": 6}
 ];


  constructor() {
    // var Fraction = require('fraction.js');
    // var x = new Fraction(3 * .0066);
    // console.log(x.toFraction(true));
   }

  ngOnInit() {
  }

  calculate(){
    this.cupsCal();
    this.gramsCal(); 
  //  this.cups = this.selectedUnit * 1 * this.measureVal;
  //  this.teaspoon = this.selectedUnit * 1 * this.measureVal;
  //  this.tablespoon = this.selectedUnit * 1 * this.measureVal;
  //  this.liters = this.selectedUnit * 1 * this.measureVal;
  //  this.ounces = this.selectedUnit * 1 * this.measureVal;
  }
  cupsCal(){
    switch (this.selectedUnit) {
      case 1:{
        return this.cups = this.measureVal;
      }
      case 2:{
        
        return this.cups = Math.round((0.0042267528198649 * this.measureVal )*100)/100

      }
      case 3:{
        return this.cups = Math.round((0.0208333 * this.measureVal )*100)/100
      } 
      case 4:{
        return this.cups = Math.round((0.0625 * this.measureVal )*100)/100        
      }
      case 5:{
        return this.cups = Math.round((4.22675 * this.measureVal )*100)/100                
      }
      case 6:{
        return this.cups = Math.round((0.125 * this.measureVal )*100)/100
      }
      default:{
        this.cups = 0;
      }
        break;
    }
  }

  gramsCal(){
    switch (this.selectedUnit) {
      case 1:{
        return this.grams = Math.round((0.0042267528198649 * this.measureVal )*100)/100
      }
      case 2:{
        return this.grams = this.measureVal;
      }
      case 3:{
        return this.grams = Math.round((0.0208333 * this.measureVal )*100)/100
      } 
      case 4:{
        return this.grams = Math.round((0.0625 * this.measureVal )*100)/100        
      }
      case 5:{
        return this.grams = Math.round((4.22675 * this.measureVal )*100)/100                
      }
      case 6:{
        return this.grams = Math.round((0.125 * this.measureVal )*100)/100
      }
      default:{
        this.grams = 0;
      }
        break;
    }
  }

}
