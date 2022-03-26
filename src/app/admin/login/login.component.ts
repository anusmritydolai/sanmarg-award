import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.valid) {
      const data = this.form.value;
      this.adminService.login(data.email, data.password).subscribe((data: any)=>{
        if (data.success==1)  {
          this.router.navigate(['admin/dashboard']);
          this.adminService.openSnackBar('login successfull', 'ok');}
        }, (error: any) => {
          this.adminService.openSnackBar(error.error.message, 'Dismiss');
  
        })
      }
  
   
  }

}
