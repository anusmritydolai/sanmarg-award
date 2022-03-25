import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post(environment.baseUrl+'auth/admin/login', formData).pipe(map((res: any) => {
      console.log(res.data.token);
      if (res.success==1)  {
        localStorage.clear();
        localStorage.setItem('admin-token', res.data.token);
        delete res.data;
      }
      return res;
    }));
  }
}
