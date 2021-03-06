import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-other',
  host: { class: 'col align-center' },
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  form: FormGroup = new FormGroup({
    advertising_policy: new FormControl('', [Validators.maxLength(200)]),
    annual_advert_expense_digital: new FormControl(""),
    annual_advert_expense_english: new FormControl("", [Validators.required]),
    annual_advert_expense_print: new FormControl("", [Validators.required]),
    annual_advert_expense_vernacular: new FormControl("", [Validators.required]),
    other_info: new FormControl("", [Validators.required]) 
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
        // this.router.navigate(['/third-page']);
      }, err => this.commonService.openSnackBar(err.error.message))
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

  prevClick() {
    this.router.navigate(['/crs-page']);
  }


}
