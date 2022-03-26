import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Form, sample } from '../interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token: string | null = localStorage.getItem('token') || null;
  thirdPage: any;
  CrsPage: any;
  evPage: any;
  hrPage: any;
  getData: BehaviorSubject<Form> = new BehaviorSubject(sample);
  getDataObservable = this.getData.asObservable();

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    if(this.token) this.getFormData();
  }

  getFormData() {
    this.http.get(environment.baseUrl + 'application', { headers: { Authorization: `Bearer ${this.token}` } }).subscribe((response: any) => {
      console.log(response);
      if (response.success === 1) this.getData.next(response.data.application);
    }, err => {
      if(err.status === 401) this.logout();
    });
  }

  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post(environment.baseUrl+'auth/user/login', formData).pipe(map((res: any) => {
      if (res.success==1)  {
        localStorage.clear();
        localStorage.setItem('token', res.data.token);
        this.token = res.data.token;
        delete res.data;
        this.getData.next(sample);
        this.getFormData();
      }
      return res;
    }));
  }

  register(data: any){
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('password', data.password);  
    return this.http.post(environment.baseUrl+'auth/user/register', formData);
  }
  
  logout(dialogRef?: any): void {
    const x = localStorage.getItem('token');
    if (x) this.http.post(environment.baseUrl+'auth/user/logout', { headers: { Authorization: `Bearer ${this.token}` }}).subscribe(()=>{
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/login']);
    }, ()=>{
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/login']);
    });
    else {
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/login']);
    }
  }
  

  lastPageSubmit(data: any): Observable<any> {
    return of('Submitted Successfully');
  }

  storeApplication(data: any) {
    let params: any = {};
    for (let [key, value] of Object.entries(data)) {
        if (value !== '' && value != undefined)
            params[key] = value;
    }
    return this.http.post(environment.baseUrl + 'application', params, { headers: { Authorization: `Bearer ${this.token}` } }).pipe(map(res=>{
      console.log(res);
      this.getFormData();
      return res;
    }));
  }

  openSnackBar(message: string, action: string = "close") {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
