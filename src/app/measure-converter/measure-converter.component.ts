import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-converter',
  templateUrl: './measure-converter.component.html',
  styleUrls: ['./measure-converter.component.css']
})
export class MeasureConverterComponent implements OnInit {

  measureVal: number;
  selectedValue: string;
  units:[];

  constructor() { }

  ngOnInit() {
  }

}
