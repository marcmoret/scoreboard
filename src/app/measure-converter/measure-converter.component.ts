import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-converter',
  templateUrl: './measure-converter.component.html',
  styleUrls: ['./measure-converter.component.css']
})
export class MeasureConverterComponent implements OnInit {

  measureVal: number;
  selectedValue: string;
  units = [
    {"unit":"cups", "value": 0},
    {"unit":"grams", "value": 1},
    {"unit":"teaspoon", "value": 2},
    {"unit":"litres", "value": 3},
    {"unit":"tablespoon", "value": 4}
 ];

  constructor() { }

  ngOnInit() {
  }

}
