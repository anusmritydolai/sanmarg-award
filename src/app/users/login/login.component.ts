import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private router: Router, private _snackBar: MatSnackBar, private commonService: CommonService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.valid) {
      const data = this.form.value;
      this.commonService.login(data.username, data.password).subscribe(data=>{
      if (data.success==1)  {
        this.router.navigate(['/first-page']);
        this._snackBar.open(data.message, 'ok');
      }
      }, (error: any) => {
        this.openSnackBar(error.error.message, 'Dismiss');

      })
    }
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
