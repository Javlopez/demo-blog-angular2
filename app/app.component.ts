import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>Hello {{user.name}} </h3>
  <h5>Welcome to the application <span style="color:red;">{{appName}}</span> </h5>
  `
})
export class AppComponent {
  appName: string;
  user = {name : 'Javier'};
  constructor() {
    this.appName = 'The blog Application';
  }
}
