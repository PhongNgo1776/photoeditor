import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { MessageService } from './message.service';


@Injectable()
export class IpAddressService {

  private heroesUrl = 'http://freegeoip.net/json/';  // URL to web api

  constructor(
    private http: Http,
    private messageService: MessageService) { 

    }

  /** call API to get Client IP Address */
  getClientIpAddress () {
    return this.http.get(this.heroesUrl);
  }

  

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
