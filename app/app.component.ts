import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app/home.component.html'
})
export class AppComponent {
  appName: string;
  user = {name : 'Javier'};
  constructor() {
    this.appName = 'The blog Application';
  }
}
