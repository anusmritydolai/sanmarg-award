import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-first-page',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
    form: FormGroup = new FormGroup({
      company_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      sector: new FormControl('', [Validators.required]),
      address_line_1: new FormControl('', [Validators.required]),
      address_line_2: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      cin: new FormControl(''),
      gst: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      facebook: new FormControl(''),
      linkedin: new FormControl(''),
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
        this.router.navigate(['/second-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

}
