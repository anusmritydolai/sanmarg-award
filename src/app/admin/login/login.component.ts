import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

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
    this.router.navigate(['admin/dashboard']);
    this._snackBar.open('login successfull', 'ok');
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
