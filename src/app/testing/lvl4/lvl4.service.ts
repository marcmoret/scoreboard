import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService{

    constructor(private http:HttpClient){

    }

    searchWeatherData(cityName: string): Observable<any>{
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=b450705610bd304ea87a9b0d06a615be&units=metric')
        .map(response => response)
        .catch(error =>{
            console.log(error);
            return Observable.throw(error)
        })
    }

}