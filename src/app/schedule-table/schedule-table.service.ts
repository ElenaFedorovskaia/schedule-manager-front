import { Injectable } from "../../../node_modules/@angular/core";
import { IScheduleTable } from "./schedule-table";
import { map, catchError, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { ScheduleTableComponent } from "./schedule-table.component";

@Injectable()
export class ScheduleTableService {

    private _scheduleTableUrl = 'http://localhost:8080/scheduleTable/1';

    constructor(private _http: Http){}

    getTableHeaders(): Observable<IScheduleTable> {
        return this._http.get(this._scheduleTableUrl).pipe( map((response: Response) => <IScheduleTable> response.json()), catchError(this.handleError));
            
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}