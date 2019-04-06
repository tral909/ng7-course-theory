import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
    carUrl: string = 'http://localhost:3000/cars';

    constructor(private http: HttpClient) {}

    getCars() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
        });
        return this.http.get(this.carUrl, {
            headers: headers
        });// if var name = value, we can pass { headers } second parameter
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

    deleteCar(id: string) {
        return this.http.delete(this.carUrl + "/" + id);
    }
}