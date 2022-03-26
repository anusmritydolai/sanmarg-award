import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-second-page',
  host: { class: 'col align-center' },
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  form: any = new FormGroup({
    contact_name: new FormControl('', [Validators.required]),
    contact_desig: new FormControl('', [Validators.required]),
    contact_mobile: new FormControl('', [Validators.required]),
    contact_email: new FormControl('', [Validators.required, Validators.email]),

  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getDataObservable.subscribe(data => {
      this.form.patchValue(data);
    })
  }

  nextClick() {
    if (this.form.valid) {
      this.commonService.storeApplication(this.form.value).subscribe(data => {
        this.router.navigate(['/third-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }
   

  prevClick() {
    this.router.navigate(['/first-page']);
  }

}
