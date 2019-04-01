import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html
  template: `
  <div class="container">
    <div class="col-8 col-offset-2">
      <h5>{{ name }}</h5>
      <h5>{{ name | lowercase }}</h5>
      <h5>{{ name | uppercase }}</h5>
      <h5>{{ name | slice:0:3 }}</h5>
      <h5>{{ name | slice:0:3 | uppercase }}</h5>
      <hr>
      <h5>{{ pi }}</h5>
      <h5>{{ pi | number }}</h5>
      <h5>{{ pi | number:'1.3-4' }}</h5>
      <hr>
      <h5>{{ money | currency:'EUR' }}</h5>
      <hr>
      <h5>{{ date }}</h5>
      <h5>{{ date | date }}</h5>
      <h5>{{ date | date:'fullDate' }}</h5>
      <h5>{{ date | date:'shortDate' }}</h5>
      <h5>{{ date | date:'shortTime' }}</h5>
      <hr>
      <h5>{{ amount }}</h5>
      <h5>{{ amount | percent }}</h5>
      <hr>
      <h5>{{ object }}</h5>
      <h5><pre>{{ object | json }}</pre></h5>
    </div>
  </div>
  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
}
