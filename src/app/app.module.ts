import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaVistaScormComponent } from './prueba-vista-scorm/prueba-vista-scorm.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaVistaScormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
