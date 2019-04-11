import { Component, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';
import * as kf from 'src/app/testing/lvl4/keyframes';
import { WeatherService } from './lvl4.service';


@Component({
  selector: 'app-lvl4',
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css'],
  animations: [
    trigger('test', [
      transition('* => 1', animate('1s', keyframes(kf.string))),
      transition('* => 0', animate('1s', keyframes(kf.string)))
    ])
  ]
})

export class Lvl4Component implements OnInit {

  @Output() visible: boolean = false;
  count: number;
  test: boolean = false;
  weatherData:any;
  city;
  today: number = Date.now();
  public ngOninit:number = 0;

  public const:number = 0;

  constructor(private weatherService: WeatherService) {
   console.log('constructor', this.const++);
  }

  ngOnInit() {
    this.location("Montreal");
    console.log('oninint',this.ngOninit++);
    
    }

  toggle(){
    this.visible = !this.visible;
  }
  testChange(){
    console.log('test')
    this.count++;
    this.test = !this.test;
  }

  location(citySelect){
    this.weatherService.searchWeatherData(citySelect).subscribe((result)=>{
      this.weatherData = result;
    });
  }
 
}
