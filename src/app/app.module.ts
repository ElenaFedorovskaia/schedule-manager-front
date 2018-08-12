import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
