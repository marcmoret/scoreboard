import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//darksky: 632d3cae5ca187f4804608b60806473c

@Injectable()
export class WeatherService{

    constructor(private http:HttpClient){

    }

    searchWeatherData(cityName: string): Observable<any>{
        return this.http.get('//api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=b450705610bd304ea87a9b0d06a615be&units=metric')
        .map(response => response)
        .catch(error =>{
            console.log(error);
            return Observable.throw(error)
        })
    }

    searchForecastData(cityName: string): Observable<any>{
        return this.http.get('//api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&APPID=b450705610bd304ea87a9b0d06a615be&units=metric&cnt=5')
        .map(response => response)
        .catch(error =>{
            console.log(error);
            return Observable.throw(error)
        })
    }

}