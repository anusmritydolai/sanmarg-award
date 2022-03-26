import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-registration',
  host: {class: 'col-fill'},
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
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void { }

  register() {
    if (this.form.valid) {
      const data2 = this.form.value;
    this.commonService.register(data2).subscribe((data: any)=>{
      if (data.success==1)  {
        this.router.navigate(['/login']);
        this.commonService.openSnackBar(data.message, 'ok');
      }
      }, (error: any) => {
        this.commonService.openSnackBar(error.error.message, 'Dismiss');
      })
    }
  }
 
}
