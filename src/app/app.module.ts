import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { ModalComponent } from './modal/modal.component';
import { DatePickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTableComponent,
    ModalComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    MyDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
