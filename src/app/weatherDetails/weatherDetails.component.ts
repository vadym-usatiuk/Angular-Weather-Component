import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  data: data;
  cityEmpty: boolean;
  city: string;

  ngOnInit() {
    this.city = "";
    this.cityEmpty = true;
    this.data = null;
  }

  updateCity(city: string): void {

    this.cityEmpty = !city.length;
    if (city) {
      let index: number = this.weatherData.findIndex(value => value.name.toLowerCase() === city.toLowerCase());
      if (index != -1) {
        this.data = this.weatherData[index];
      } else {
        this.data = null;
      }
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
