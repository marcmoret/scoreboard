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
  

  measureVal: number;
  selectedUnit: number = 0;
  cups:any = 0;
  ounces:any = 0;
  tablespoon:any = 0;
  teaspoon:any = 0;
  liters:any = 0;
  grams:any = 0;
  key = 'Item 1';
  key2 = 'Item 2';
  key3 = 'Item 3';
  key4 = 'Item 4'
  key5 = 'Item 5'
  key6 = 'Item 6'
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
  {"unit":"Centimetre", "value": 6}
 ];

 results = [{
  measure: '',
  selectMeasure: ''
 }];


 items;
 items2;
 items3;

 items4;
 items5;
 items6;

 num = 0;
 recentSearches = [];
 storageMeasureVal;
 storageSelectUnitVal;
 storageSelectUnit;

 storageDistance;
 storageSelectDisVal
 storageSelectDistance;

 selectDistUnit;
 selectDist;

 mile = 0;
 foot = 0;
 inch = 0;
 km = 0;
 m = 0;
 cm = 0;
 data: any;

  constructor() {}

  ngOnInit() {    

    if (localStorage.getItem(this.key)) {
      this.items = JSON.parse(localStorage.getItem(this.key))
      this.items2 = localStorage.getItem(this.key2)
      this.items3 = localStorage.getItem(this.key3)
    } else {
      this.items = [''];
    }
    
    
    if (localStorage.getItem(this.key4)) {
      this.items4 = JSON.parse(localStorage.getItem(this.key4))
      this.items5 = localStorage.getItem(this.key5)
      this.items6 = localStorage.getItem(this.key6)
    } else {
      this.items4 = [''];
    }

    console.log(this.items);
    
  }

  calculate(){
    this.cupsCal();
    this.gramsCal();
    this.teaspoonCal(); 
    this.tablespoonCal();
    this.literCal();
    this.ounceCal();
    
    this.storageMeasureVal = this.measureVal;
    this.storageSelectUnitVal = this.units[this.selectedUnit - 1].unit;
    this.storageSelectUnit = this.selectedUnit
    localStorage.setItem(this.key, JSON.stringify(this.storageMeasureVal));
    localStorage.setItem(this.key2, this.storageSelectUnitVal);
    localStorage.setItem(this.key3, this.storageSelectUnit);
    
  }

  clearCache(){
    localStorage.clear();
    this.items = null;
    this.items2 = null;
    this.items4 = null;
    this.items6 = null;
  }

  savedSearchUnit(){
    this.measureVal = this.items;
    this.selectedUnit = this.units[this.items3 - 1].value;
    this.calculate();
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
    this.mCal();
    this.cmCal();

     
    this.storageDistance = this.selectDist;
    this.storageSelectDistance = this.distance[this.selectDistUnit - 1].unit;
    this.storageSelectDisVal = this.selectDistUnit;
    localStorage.setItem(this.key4, JSON.stringify(this.storageDistance));
    localStorage.setItem(this.key5, this.storageSelectDisVal);
    localStorage.setItem(this.key6, this.storageSelectDistance);

  }

  savedSearchDist(){
    this.selectDist = this.items4;
    this.selectDistUnit = this.units[this.items5 - 1].value;
    this.calDistance();
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
      case 6:{
        return this.mile = Math.round((this.selectDist / 160934.4)*1000000)/1000000
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
      case 6:{
        return this.foot = Math.round((this.selectDist / 30.48)*10000)/100000
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
      case 6:{
        return this.inch = Math.round((this.selectDist / 2.54)*10000)/100000
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
      case 6:{
        return this.km = Math.round((this.selectDist / 100000)*10000)/100000
      }
      default:{
        this.km = 0;
      }
        break;
    }
  }
  mCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.m = Math.round((1609.34 * this.selectDist )*100)/100
      }
      case 2:{
        return this.m = Math.round((0.3048 * this.selectDist )*100000)/100000
      }
      case 3:{
        return this.m = Math.round((0.0254 * this.selectDist )*100000)/100000
      } 
      case 4:{        
        return this.m = Math.round((1000 * this.selectDist )*100)/100
      }
      case 5:{
        return this.m = this.selectDist;
      }
      case 6:{
        return this.m = Math.round(( .001 * this.selectDist)*1000)/1000
      }
      default:{
        this.m = 0;
      }
        break;
    }
  }

  cmCal(){
    switch (this.selectDistUnit) {
      case 1:{
        return  this.cm = Math.round((160934.4 * this.selectDist )*100)/100
      }
      case 2:{
        return this.cm = Math.round((30.48 * this.selectDist )*100000)/100000
      }
      case 3:{
        return this.cm = Math.round((2.54 * this.selectDist )*100000)/100000
      } 
      case 4:{        
        return this.cm = Math.round((100000 * this.selectDist )*100)/100
      }
      case 5:{
        return this.cm = Math.round((100 * this.selectDist )*100)/100
      }
      case 6:{
        return this.cm = this.selectDist;
      }
      default:{
        this.cm = 0;
      }
        break;
    }
  }
  
}

