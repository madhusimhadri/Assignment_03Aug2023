import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 private apiKey = "d6971caccafba0504868fc48eb196e01";
 private baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

  getWeather(city :string){
   const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url)
    .pipe(
      catchError((error) =>{
        console.log("Error in Weather Service: ", error);
        return throwError('Invalid city! Please enter a valid city name');
      }
      )
    );
  }

}
