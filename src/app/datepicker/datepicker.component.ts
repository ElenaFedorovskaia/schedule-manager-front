import { Component } from "../../../node_modules/@angular/core";
import { IMyDpOptions } from 'mydatepicker';
import { IMyDate, IMyDateModel } from 'mydatepicker';


@Component({
    selector: 'datepicker',
    template: `<my-date-picker [options]="myDatePickerOptions" [selDate]="selDate" (dateChanged)="onDateChanged($event)" required></my-date-picker>`
})
export class DatePickerComponent {

    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
        width: '30%',
        editableDateField: false,
        openSelectorOnInputClick: true,
        showClearDateBtn: false
    };

    selDate: IMyDate;
    fDate: Date;

    constructor() {
        let d: Date = new Date();
        this.selDate = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.fDate = new Date(this.selDate.year, this.selDate.month, this.selDate.day);
        console.log(this.fDate);
    }

    onDateChanged(event: IMyDateModel) {
        this.selDate = event.date;
        this.fDate = event.jsdate;
        console.log(this.fDate);
    }

    getDate(): Date {
        console.log(this.fDate)
        return this.fDate;
    }

}