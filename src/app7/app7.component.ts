import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app7.component.html'
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];
}
