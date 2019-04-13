import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CarComponent } from './car.component';
import { CarService } from './car.service';
  
describe('CarComponent', () => {
    let fixture: ComponentFixture<CarComponent>;
    let component: CarComponent;
    let carService: CarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarComponent]
        });

        fixture = TestBed.createComponent(CarComponent);
        component = fixture.debugElement.componentInstance;
        carService = fixture.debugElement.injector.get(CarService);
    });

    it('should create component instance', () => {
        expect(component).toBeTruthy();
    });

    it(`should render h1 tag with title 'My car header'`, () => {
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('h1').textContent;
        expect(text).toEqual('My car header');
    });

    it(`it should inject CarService`, () => {
        fixture.detectChanges();
        expect(component.isCarVisible).toEqual(carService.getVisibility());
    });

    it(`it should display car if is visible`, () => {
        carService.showCar();
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('span').textContent;
        expect(text).toEqual('Car is visible');
    });

    it(`it shouldn't display car if isn't visible`, () => {
        carService.hideCar();
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('span').textContent;
        expect(text).not.toEqual('Car is visible');
    });

    it(`it shouldn't get car name if not async`, () => {
        spyOn(carService, 'getCarName').and.returnValue(new Observable());
        //     new Observable(observer => {
        //         setTimeout(() => {
        //             observer.next('Tesr');
        //         }, 100);
        //     })
        // );
        fixture.detectChanges();
        expect(component.carName).toBe(undefined);
    });

    it(`it should get car name if async`, async(() => {
        spyOn(carService, 'getCarName').and.returnValue(
            new Observable(observer => {
                setTimeout(() => {
                    observer.next('TestCar');
                }, 100);
            })
        );
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.carName).toEqual('TestCar');
        });
    }));
});