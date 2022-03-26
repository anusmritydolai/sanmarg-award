import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }
  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post(environment.baseUrl+'auth/admin/login', formData).pipe(map((res: any) => {
      // console.log(res.data.token);
      if (res.success==1)  {
        localStorage.clear();
        localStorage.setItem('admin-token', res.data.token);
        delete res.data;
      }
      return res;
    }));
  }

  logout(dialogRef?: any): void {
    const x = localStorage.getItem('token');
    if (x) this.http.post(environment.baseUrl+'auth/admin/logout', { headers: { Authorization: `Bearer ${localStorage.getItem('admin-token')}` }}).subscribe(()=>{
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/admin/login']);
    }, ()=>{
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/admin/login']);
    });
    else {
      localStorage.clear();
      dialogRef?.close();
      this.router.navigate(['/admin/login']);
    }
  }

  openSnackBar(message: string, action: string = "close") {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
