import { Component, EventEmitter, Output } from '@angular/core';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city: string = '';
  weather: any;
  errorMsg: string = '';
  k = 273;
  tempLow = 'assets/temp1.jpg';
  tempMid = 'assets/temp2.jpg';
  tempHigh = 'assets/temp3.jpg';

  constructor(private weatherService: WeatherService) {}

  @Output() sendImage = new EventEmitter();

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weather = data;
        this.errorMsg = '';
        this.weatherDiff();
      },
      (error) => {
        console.log('Error in Weather Component: ', error);
        this.weather = null;
        this.errorMsg = error;
      }
    );
  }

  weatherDiff() {
    let image = '';
    if (this.weather.main.temp - this.k < 15) {
      image = "'/assets/temp1.jpg'";
    }
    if (
      this.weather.main.temp - this.k >= 15 &&
      this.weather.main.temp - this.k <= 30
    ) {
      image = "'/assets/temp2.jpg'";
    }
    if (this.weather.main.temp - this.k > 30) {
      image = "'/assets/temp3.jpg'";
    }

    this.sendImage.emit({ link: image });
    console.log('test', image);
  }

  captureEnter(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.getWeather();
    }
  }

  //Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum. Dicta dolores molestias

  //changes done

}
