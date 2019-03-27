import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
  <h4>Single Car</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam.</p>
  `,
  styles: [`
  h4 {
    color: brown;
  }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}