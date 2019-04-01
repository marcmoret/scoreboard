import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';

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
  test;

  measureVal: number;
  selectedUnit: number = 0;
  cups:any = 0;
  ounces:any = 0;
  tablespoon:any = 0;
  teaspoon:any = 0;
  liters:any = 0;
  grams:any = 0;
  key = 'Item 1';
  units = [
    {"unit":"Cups", "value": 1},
    {"unit":"Grams", "value": 2},
    {"unit":"Teaspoons", "value": 3},
    {"unit":"Tablespoons", "value": 4},
    {"unit":"Litres", "value": 5},
    {"unit":"Ounces", "value": 6}
 ];
 distance = [
  {"unit":"Mile", "value": 1},
  {"unit":"Foot", "value": 2},
  {"unit":"Inch", "value": 3},
  {"unit":"KM", "value": 4},
  {"unit":"Metre", "value": 5},
 ];


 items;
 num;
 recentSearches:[];

 selectDistUnit;
 selectDist;

 mile = 0;
 foot = 0;
 inch = 0;
 km = 0;
 mm = 0;

  constructor() {
    // var Fraction = require('fraction.js');
    // var x = new Fraction(3 * .0066);
    // console.log(x.toFraction(true));
   }

  ngOnInit() {
    if (localStorage.getItem(this.key)) {
      this.items = JSON.parse(localStorage.getItem(this.key))
    } else {
      this.items = []
    }
    //console.log(localStorage.getItem(this.key));
    console.log(this.recentSearches = JSON.parse(localStorage.getItem(this.key)));
    
  }

  calculate(){
    this.cupsCal();
    this.gramsCal();
    this.teaspoonCal(); 
    this.tablespoonCal();
    this.literCal();
    this.ounceCal();
    this.num++;
    this.test = this.num.toString();
    localStorage.setItem(this.key, this.test);
    console.log(localStorage.getItem(this.key));
    //this.recentSearches.push(this.test);
    

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

  calDistance(){
    this.mileCal();
    this.feetCal();
    this.inchCal();
    this.kmCal();
    this.mmCal();
  }

  mileCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return this.mile = this.selectDist;
      }
      case 2:{
        return  this.mile = Math.round((0.000189394 * this.selectDist )*100000)/100000
      }
      case 3:{
        return this.mile = Math.round((this.selectDist / 63360 )*100000)/100000
      } 
      case 4:{        
        return this.mile = Math.round((0.621371 * this.selectDist )*100000)/100000       
      }
      case 5:{
        return this.mile = Math.round((0.000621371 * this.selectDist )*10000)/100000
      }
      default:{
        this.mile = 0;
      }
        break;
    }
  }

  feetCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.foot = Math.round((5280 * this.selectDist )*100)/100
      }
      case 2:{
        return this.foot = this.selectDist;
      }
      case 3:{
        return this.foot = Math.round((0.0833333 * this.selectDist )*100)/100
      } 
      case 4:{        
        return this.foot = Math.round((3280.84 * this.selectDist )*100)/100     
      }
      case 5:{
        return this.foot = Math.round((3.28084 * this.selectDist )*100)/100
      }
      default:{
        this.foot = 0;
      }
        break;
    }
  }

  inchCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.inch = Math.round((63360 * this.selectDist )*100)/100
      }
      case 2:{
        return this.inch = Math.round((12 * this.selectDist )*100)/100
      }
      case 3:{
        return this.inch = this.selectDist;
      } 
      case 4:{        
        return this.inch = Math.round((39370.1 * this.selectDist )*100)/100     
      }
      case 5:{
        return this.inch = Math.round((39.3701 * this.selectDist )*100)/100
      }
      default:{
        this.inch = 0;
      }
        break;
    }
  }

  kmCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.km = Math.round((1.60934 * this.selectDist )*100)/100
      }
      case 2:{
        return this.km = Math.round((0.0003048 * this.selectDist )*100000)/100000
      }
      case 3:{
        return this.km = Math.round((this.selectDist / 39370.079)*100000)/100000
      } 
      case 4:{        
        return this.km = this.selectDist;
      }
      case 5:{
        return this.km = Math.round((0.001 * this.selectDist )*100)/100
      }
      default:{
        this.km = 0;
      }
        break;
    }
  }
  mmCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.mm = Math.round((1609.34 * this.selectDist )*100)/100
      }
      case 2:{
        return this.mm = Math.round((0.3048 * this.selectDist )*100000)/100000
      }
      case 3:{
        return this.mm = Math.round((0.0254 * this.selectDist )*100000)/100000
      } 
      case 4:{        
        return this.mm = Math.round((1000 * this.selectDist )*100)/100
      }
      case 5:{
        return this.mm = this.selectDist;
      }
      default:{
        this.mm = 0;
      }
        break;
    }
  }
  
}

