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
  forecastData: any;
  city;
  today: number = Date.now();
  public ngOninit:number = 0;

  public const:number = 0;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.location("Montreal");
    }

  toggle(){
    this.visible = !this.visible;
  }
  testChange(){
    this.count++;
    this.test = !this.test;
  }

  location(citySelect){
    this.weatherService.searchWeatherData(citySelect).subscribe((result)=>{
      this.weatherData = result;
    });
    this.getforecast(citySelect)
  }

  getforecast(citySelect){
    this.weatherService.searchForecastData(citySelect).subscribe((result)=>{
      this.forecastData = result;
      console.log(this.forecastData);
    });
  }
 
}
