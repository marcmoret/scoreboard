import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-converter',
  templateUrl: './measure-converter.component.html',
  styleUrls: ['./measure-converter.component.css']
})
export class MeasureConverterComponent implements OnInit {

  celsius = 0;
  farenheit = 0;
  selectTemp;
  selectMeasure;

  measureVal: number;
  selectedUnit: number = 0;
  cups:any = 0;
  ounces:any = 0;
  tablespoon:any = 0;
  teaspoon:any = 0;
  liters:any = 0;
  grams:any = 0;
  units = [
    {"unit":"Cups", "value": 1},
    {"unit":"Grams", "value": 2},
    {"unit":"Teaspoons", "value": 3},
    {"unit":"Tablespoons", "value": 4},
    {"unit":"Litres", "value": 5},
    {"unit":"Ounces", "value": 6}
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
    this.teaspoonCal(); 
    this.tablespoonCal();
    this.literCal();
    this.ounceCal();
  }
  cupsCal(){
    switch (this.selectedUnit) {
      case 1:{
        return this.cups = this.measureVal;
      }
      case 2:{
        
       return this.cups = Math.round((0.0042267528198649 * this.measureVal )*100)/100;
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
      return  this.grams = Math.round((220 * this.measureVal )*100)/100
      }
      case 2:{
        return this.grams = this.measureVal;
      }
      case 3:{
        return this.grams = Math.round((5 * this.measureVal )*100)/100
      } 
      case 4:{
        return this.grams = Math.round((14.3 * this.measureVal )*100)/100        
      }
      case 5:{
        return this.grams = Math.round((1000 * this.measureVal )*100)/100                
      }
      case 6:{
        return this.grams = Math.round((28.3495 * this.measureVal )*100)/100
      }
      default:{
        this.grams = 0;
      }
        break;
    }
  }
  teaspoonCal(){
    switch (this.selectedUnit) {
      case 1:{
      return  this.teaspoon = Math.round((48 * this.measureVal )*100)/100
      }
      case 2:{
        return this.teaspoon = Math.round((0.2 * this.measureVal )*100)/100
      }
      case 3:{
        return this.teaspoon = this.measureVal;
      } 
      case 4:{
        return this.teaspoon = Math.round((3 * this.measureVal )*100)/100        
      }
      case 5:{
        return this.teaspoon = Math.round((202.884 * this.measureVal )*100)/100                
      }
      case 6:{
        return this.teaspoon = Math.round((6 * this.measureVal )*100)/100
      }
      default:{
        this.teaspoon = 0;
      }
        break;
    }
  }
  tablespoonCal(){
    switch (this.selectedUnit) {
      case 1:{
        return  this.tablespoon = Math.round((16 * this.measureVal )*100)/100
      }
      case 2:{
        return this.tablespoon = Math.round((0.2 * this.measureVal )*100)/100
      }
      case 3:{
        return this.tablespoon = Math.round((.333 * this.measureVal )*100)/100
      } 
      case 4:{
        return this.tablespoon = this.measureVal;
      }
      case 5:{
        return this.tablespoon = Math.round((67.628 * this.measureVal )*100)/100                
      }
      case 6:{
        return this.tablespoon = Math.round((2 * this.measureVal )*100)/100
      }
      default:{
        this.tablespoon = 0;
      }
        break;
    }
  } 
  literCal(){
    switch (this.selectedUnit) {
      case 1:{
        return  this.liters = Math.round((.236588 * this.measureVal )*100)/100
      }
      case 2:{
        return this.liters = Math.round((0.0001 * this.measureVal )*100)/100
      }
      case 3:{
        return this.liters = Math.round((0.00492892 * this.measureVal )*100)/100
      } 
      case 4:{        
        return this.liters = Math.round((0.0147868 * this.measureVal )*100)/100                
      }
      case 5:{
        return this.liters = this.measureVal;
      }
      case 6:{
        return this.liters = Math.round((0.0295735 * this.measureVal )*100)/100
      }
      default:{
        this.tablespoon = 0;
      }
        break;
    }
  }
  ounceCal(){
    switch (this.selectedUnit) {
      case 1:{
        return  this.ounces = Math.round((8 * this.measureVal )*100)/100
      }
      case 2:{
        return this.ounces = Math.round((0.035274 * this.measureVal )*100)/100
      }
      case 3:{
        return this.ounces = Math.round((0.166667 * this.measureVal )*100)/100
      } 
      case 4:{        
        return this.ounces = Math.round((0.5 * this.measureVal )*100)/100                
      }
      case 5:{
        return this.ounces = Math.round((33.814 * this.measureVal )*100)/100
      }
      case 6:{
        return this.ounces = this.measureVal;
      }
      default:{
        this.tablespoon = 0;
      }
        break;
    }
  }
  
  calTemp(){
    if(this.selectTemp == 'F'){
      this.farenheit = this.selectMeasure;
      this.celsius = (this.selectMeasure - 32) * 5/9;
      return;
    }else if (this.selectTemp == 'C'){
      this.celsius = this.selectMeasure;
      this.farenheit = (this.selectMeasure * 9/5) + 35;
      return;
    }else{
      this.celsius = 0;
      this.farenheit = 0;
    }
    
    
    
    
  }
  
}

