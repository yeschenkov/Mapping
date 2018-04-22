import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

const googleMapsCore = AgmCoreModule.forRoot({
   apiKey : 'AIzaSyAey4LJYx_Qh2H4XQC6u0KHZvBRqeLlfoY',
 });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
   googleMapsCore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
