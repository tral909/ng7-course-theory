import { Component } from '@angular/core';

import { CarsService } from './cars8.service';

@Component({
  selector: 'app-root',
  templateUrl: './app8.component.html'
})
export class AppComponent {
  cars = [];

  constructor(private carsService: CarsService) {}

  loadCars() {
      this.carsService.getCars().subscribe((response) => {
          console.log(response);
      });
  }
}