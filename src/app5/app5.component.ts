import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html
  template: `
  <div class="container">
    <div class="col-8 col-offset-2">
      <h5>{{ num }}</h5>
      <h5>{{ num | app5Pow }}</h5>
      <h5>{{ 6 | app5Pow:2 }}</h5>
      <h5>{{ num | app5Pow:3:'=' }}</h5>
    </div>
  </div>
  `
})
export class AppComponent {
  num = 2;
}
