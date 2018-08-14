import { Injectable } from "../../../node_modules/@angular/core";
import { IScheduleTable } from "./schedule-table";
import { map, catchError, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { Observable, of } from 'rxjs';
import { ScheduleTableComponent } from "./schedule-table.component";

@Injectable()
export class ScheduleTableService {

    //private _scheduleTableUrl = 'http://localhost:8080/scheduleTable/1';

    constructor(private _http: Http){}

    getTableHeaders(): Observable<IScheduleTable> {
        // return this._http.get(this._scheduleTableUrl).pipe( map((response: Response) => <IScheduleTable> response.json()), catchError(this.handleError));
        let mock: IScheduleTable = {
            "id": 1,
            "startTime": "09:00:00",
            "endTime": "18:00:00",
            "span": 60,
            "titles": "Room 1;Room 2; Room 3; Room 4"
        }

        return of(mock);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}