import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
    carUrl: string = 'http://localhost:3000/cars';

    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        const msg: string = 'An error occurred:' + error.error.message
        console.error(msg);
        alert(msg)
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        const msg: string = `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`
        console.error(msg);
        alert(msg);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }

    getCars() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
        });
        return this.http.get(this.carUrl, {
            headers: headers
        })
        .pipe(
            catchError(this.handleError)
        );
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