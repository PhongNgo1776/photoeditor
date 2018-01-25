import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  private heroesUrl = 'http://freegeoip.net/json/';  // URL to web api

  constructor(
    private http: Http,
    private messageService: MessageService) { 

    }

  /** GET heroes from the server */
  getHeroes () {
    var ip = window.location.origin;
    console.log('IP:' + ip);
    return this.http.get(this.heroesUrl)
      .subscribe(res => {
        console.log(res);
      });
  }

  

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
