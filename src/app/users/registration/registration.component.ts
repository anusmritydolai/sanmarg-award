import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: any = new FormGroup({
   name: new FormControl('', [Validators.required]),
   email: new FormControl('', [Validators.required]),
   mobile_no: new FormControl('', [Validators.required]),
   password: new FormControl('', [Validators.required]),
  });
  constructor(private commonService: CommonService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {


  }

  Register() {
    this.router.navigate(['/first-page']);
        this._snackBar.open('login successfull', 'ok');
  }
 
}
