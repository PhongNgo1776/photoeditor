import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class IpAddressService {
    url = 'http://angularorange.io/json/httpclientdata.json';

    constructor(private http: HttpClient) { }
    ngOninit(){
        this.http.get(this.url)
            .subscribe(data => {
                console.log('DATA: ' + data);
            });
    }

    getIpAddress() {
        this.http.get('http://angularorange.io/json/httpclientdata.json')
            .map(res => res)
            .subscribe(data => {
                console.log('DATA: ' + data);
            });
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log(message);
    }

}