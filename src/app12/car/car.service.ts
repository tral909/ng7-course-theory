import { Observable } from 'rxjs';

export class CarService {
    private isVisible = true;

    showCar() {
        this.isVisible = true;
    }

    hideCar() {
        this.isVisible = false;
    }

    getVisibility() {
        return this.isVisible;
    }

    getCarName(): Observable<string> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next('Ford');
            }, 100);
        });
    }
}