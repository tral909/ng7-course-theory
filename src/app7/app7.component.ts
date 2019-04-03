import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app7.component.html'
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
    
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  formData = {};
  isSubmited = false;

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }

  addRandEmail() {
    const randEmail = 'wfm@gmail.com';
    // this.form.setValue({
    //   user: {
    //       pass: '',
    //       email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    // doesnt reset form after add randEmail
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }
}
