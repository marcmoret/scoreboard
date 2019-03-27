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


  constructor() { }

  ngOnInit() {
  }

  calculate(){
    this.cupsCal();
  //  this.grams = this.selectedUnit * 1 * this.measureVal;
  //  this.cups = this.selectedUnit * 1 * this.measureVal;
  //  this.teaspoon = this.selectedUnit * 1 * this.measureVal;
  //  this.tablespoon = this.selectedUnit * 1 * this.measureVal;
  //  this.liters = this.selectedUnit * 1 * this.measureVal;
  //  this.ounces = this.selectedUnit * 1 * this.measureVal;
  }
  cupsCal(){
    console.log('start')
    switch (this.selectedUnit) {
      case 1:{
        return this.cups = this.measureVal;
      }
      case 2:{
        return this.cups = 0.0066 * this.measureVal;
        console.log('fired', this.cups)
      }
      case 3:{
        
      } 
      case 4:{
        
      }
      case 5:{
        
      }
      case 6:{
        
      }
      default:{
        this.cups = 0;
      }
        break;
    }
  }

}
