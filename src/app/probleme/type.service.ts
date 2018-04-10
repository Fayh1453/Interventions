import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IType } from './typeprobleme';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TypeService {
  private baseUrl = 'api/types';
  
  constructor(private _http: HttpClient) { }

  obtenirTypes(): Observable<IType[]> {
    return this._http.get<IType[]>(this.baseUrl)
        .do(data => console.log('obtenirTypes: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(err.error);
    return Observable.throw(err.message);
  }
}