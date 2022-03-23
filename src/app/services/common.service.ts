import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  firstPage: any;
  secondPage: any;
  thirdPage: any;

  constructor() { }

  lastPageSubmit(data: any): Observable<any> {
    return of('Submitted Successfully');
  }
}