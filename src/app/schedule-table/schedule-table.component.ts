import { Component, ViewChild } from "../../../node_modules/@angular/core";
import { ScheduleTableService } from "./schedule-table.service";
import * as moment from 'moment';
import { IScheduleTable } from "./schedule-table";
import { DatePickerComponent } from "../datepicker/datepicker.component";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'schedule-table',
    templateUrl: './schedule-table.component.html',
    styleUrls: ['./schedule-table.component.css'],
    providers: [ScheduleTableService]
})
export class ScheduleTableComponent {
    @ViewChild(DatePickerComponent) datepicker: DatePickerComponent;
    selectedDate: string;
    selectedTitle: string;
    selectedInterval: string;
    titles: string[];
    intervals: string[];
    private _scheduleTable: IScheduleTable;
    errorMessage: string;


    constructor(private _scheduleTableService: ScheduleTableService, private datepipe: DatePipe) {
    }

    ngOnInit(): void {
        this._scheduleTableService.getTableHeaders().subscribe(st => {
            this._scheduleTable = st
            this.intervals = this.getIntervals(this._scheduleTable);
            this.titles = this._scheduleTable.titles.split(";");
            console.log(this.titles)
        }, error => this.errorMessage = <any>error);

    }

    clickCell(title: any, interval: any){
        this.selectedTitle = title;
        this.selectedInterval = interval;
        this.selectedDate = this.datepipe.transform(this.datepicker.getDate(), 'MMMM d, y');        
        console.log(this.selectedDate);
     }

    getIntervals(scheduleTable: IScheduleTable): string[] {
        let sTime = moment(scheduleTable.startTime, 'LT');
        let eTime = moment(scheduleTable.endTime, 'LT');
        var result: string[] = [];
        result.push(sTime.format('LT'));
        var time = sTime.clone();
        while (time.format('LT') !== eTime.format('LT')) {
            time.add(scheduleTable.span, "minutes");
            let str = time.format('LT');
            result.push(str);
        }

        return result;
    }

}

