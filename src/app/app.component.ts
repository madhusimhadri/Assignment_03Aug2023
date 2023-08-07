import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-app';
  // tempLow = '/assets/temp1.jpg';
  public fromChild = 'assets/weatherImage4.jpg';

  updateImage(data: any) {
    this.fromChild = data.link;
    console.log(this.fromChild);
  }
}
