import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private _snackBar: MatSnackBar, private commonService: CommonService, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.valid) {
      const data = this.form.value;
      this.adminService.login(data.email, data.password).subscribe((data: any)=>{
        if (data.success==1)  {
          this.router.navigate(['admin/dashboard']);
          this._snackBar.open('login successfull', 'ok');}
        }, (error: any) => {
          this.openSnackBar(error.error.message, 'Dismiss');
  
        })
      }
  
   
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
