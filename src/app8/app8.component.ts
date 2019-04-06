import { Component } from '@angular/core';

import { CarsService } from './cars8.service';

interface Car {
    id: number,
    name: string,
    color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app8.component.html'
})
export class AppComponent {
  cars = [];

  constructor(private carsService: CarsService) {}

  loadCars() {
      this.carsService.
          getCars().
          subscribe((cars: Car[]) => {
          this.cars = cars;
      });
  }
}