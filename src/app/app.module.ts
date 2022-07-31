import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DateService } from './service/dateService';

import { DatePipe } from '@angular/common';
import { ClientComponent } from './components/MyGreeter/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
