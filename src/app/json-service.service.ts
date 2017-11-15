import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class JSONServiceService {

  constructor(private http: Http) {

  }

  getJSON(URL): Observable<any> {
    return this.http.get(URL);
  }

}
