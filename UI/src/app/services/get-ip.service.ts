import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable()
export class IpAddressService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
      return this.http
            .get('http://freegeoip.net/json/?callback')
            .map(response => response || {});
  }

  private handleError(error: HttpErrorResponse):
      Observable<any> {
        //Log error in the browser console
        console.error('observable error: ', error);

        return Observable.throw(error);
    }
}