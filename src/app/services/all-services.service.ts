import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  apiKey= "3d8b309701a13f65b660fa2c64cdc517";
  constructor(public http: HttpClient) { }

   getData(city){
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+this.apiKey);
  }

  getDetailedData(city){
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&cnt=5&appid='+this.apiKey);
  }

  // for getting the metric unit i have passed units as metrics in all service calls
}
