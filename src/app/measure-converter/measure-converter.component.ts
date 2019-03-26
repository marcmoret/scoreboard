import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-converter',
  templateUrl: './measure-converter.component.html',
  styleUrls: ['./measure-converter.component.css']
})
export class MeasureConverterComponent implements OnInit {

  measureVal: number;
  selectedUnit: number = 0;
  cups:number = 0;
  ounces:number = 0;
  tablespoon:number = 0;
  teaspoon:number = 0;
  liters:number = 0;
  grams:number = 0;
  units = [
    {"unit":"Cups", "value": 0},
    {"unit":"Grams", "value": 1},
    {"unit":"Teaspoon", "value": 2},
    {"unit":"Tablespoon", "value": 4},
    {"unit":"Litres", "value": 3},
    {"unit":"Ounce", "value": 4}
 ];


  constructor() { }

  ngOnInit() {
  }

  calculate(){
   this.grams = this.selectedUnit * this.measureVal;
  }

}
