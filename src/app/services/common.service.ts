import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Form, sample } from '../interfaces/form';
import { PrevPopupComponent } from '../shared/prev-popup/prev-popup.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token: string | null = localStorage.getItem('token') || null;
  getData: BehaviorSubject<Form> = new BehaviorSubject(sample);
  getDataObservable = this.getData.asObservable();

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    if(this.token) this.getFormData();
  }

  getFormData() {
    this.http.get(environment.baseUrl + 'application', { headers: { Authorization: `Bearer ${this.token}` } }).pipe(first()).subscribe((response: any) => {
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

  storeApplication(data: Form, files: {name: string, file: any, fname: string}[] = []) {
    const x = {...this.getData.getValue(), ...data};
    if(JSON.stringify(x) === JSON.stringify(this.getData.getValue())) return of('Nothing to update.');
    let params = new FormData();
    for (let [key, value] of Object.entries(data)) {
      if (value !== '' && value != undefined) params.append(key, value)
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].file) params.append(files[i].name, files[i].file, files[i].fname);
    }
    return this.http.post(environment.baseUrl + 'application', params, { headers: { Authorization: `Bearer ${this.token}` } }).pipe(map((res: any)=>{
      this.openSnackBar(res.message);
      this.getFormData();
      return res;
    }));
  }

  openSnackBar(message: string, action: string = "close") {
    this._snackBar.open(message, action, {duration: 3000});
  }

  prevClick(): Observable<number> {
    const dialogRef = this.dialog.open(PrevPopupComponent, {
      width: '350px',
    });

    return dialogRef.afterClosed();
  }
}
