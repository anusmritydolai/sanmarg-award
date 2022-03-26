import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.valid) {
      const data = this.form.value;
      this.commonService.login(data.username, data.password).subscribe(data=>{
      if (data.success==1)  {
        this.router.navigate(['/first-page']);
        this.commonService.openSnackBar(data.message, 'ok');
      }
      }, (error: any) => {
        this.commonService.openSnackBar(error.error.message, 'Dismiss');

      })
    }
  }

}
