import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class AppComponent {
  headerText = 'Создание своей директивы.';
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
    this.current = number;
  }
}
