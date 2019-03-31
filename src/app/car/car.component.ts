import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: ['./car.component.css']
})
export class CarComponent {
    @Input('carItem') car: {name: string, year: number};

    private carItem = false;
}