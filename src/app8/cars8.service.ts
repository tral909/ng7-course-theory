import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
    carUrl: string = 'http://localhost:3000/cars';

    constructor(private http: HttpClient) {}

    getCars() {
        return this.http.get(this.carUrl);
    }

    postCar(carName: string) {
        const data = {
            name: carName,
            color: 'blue'
        };
        return this.http.post(this.carUrl, data);
    }

    changeColor(car: any, color: string) {
        car.color = color;
        return this.http.put(this.carUrl + "/" + car.id, car);
    }
}