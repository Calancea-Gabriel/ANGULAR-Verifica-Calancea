import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { FiglioComponent } from './figlio/figlio.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    FiglioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
