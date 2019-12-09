import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IscrittiComponent } from './iscritti/iscritti.component';
import { IscrittoComponent } from './iscritto/iscritto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IscrittiComponent, IscrittoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
