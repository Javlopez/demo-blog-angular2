import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, Ng2BootstrapModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule{ }
