import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'app5Pow'
})
export class PowPipe implements PipeTransform {
    transform(value: any, powNumber: number = 1, symbol: string = '') {
        return symbol + Math.pow(value, powNumber) + ' pipe!';
    }
}