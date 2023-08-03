import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city: string = '';
  weather: any;
  errorMsg: string = '';
  constructor(private weatherService: WeatherService) {}

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe((data) =>{
      this.weather = data;
      this.errorMsg = '';
    },
    (error) =>{
      console.log("Error in Weather Component: ",error);
      this.weather=null;
      this.errorMsg=error;

    }
    );
  }

}
