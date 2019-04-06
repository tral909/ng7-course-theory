import { Component } from '@angular/core';

import { CarsService } from './cars8.service';

interface Car {
    id: number,
    name: string,
    color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app8.component.html',
  styles: [`
      .badge {
        float: right;
      }  
  `]
})
export class AppComponent {
  colors = [
      'red',
      'blue',
      'green',
      'pink',
      'yellow',
      'grey'
  ];
  cars = [];
  carName: string = '';

  constructor(private carsService: CarsService) {}

  loadCars() {
      this.carsService
          .getCars()
          .subscribe((cars: Car[]) => {
              this.cars = cars;
      });
  }

  addCar() {
      this.carsService
          .postCar(this.carName)
          .subscribe((car: Car) => {
              this.cars.push(car);
          },
          error => {
              alert(error)
          }
        );
      this.carName = '';
  }

  getRandColor() {
      const num = Math.round(Math.random() * this.colors.length - 1);
      return this.colors[num];
  }

  setNewColor(car: Car) {
      this.carsService
          .changeColor(car, this.getRandColor())
          .subscribe((response) => {
              console.log(response);
          });
  }

  deleteCar(id: string) {
      this.carsService
          .deleteCar(id)
          .subscribe((response) => {
              console.log(response);
              this.cars = this.cars.filter(c => c.id !== id)
          });
  }
}