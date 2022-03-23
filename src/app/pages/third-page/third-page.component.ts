import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonService } from 'src/app/services/common.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-third-page',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ThirdPageComponent implements OnInit {
  date = moment();
  form: any = new FormGroup({
    business_synopsis: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    main_product: new FormControl('', [Validators.required]),
    last_year: new FormControl('', [Validators.required]),
    last2_year: new FormControl('', [Validators.required]),
    last3_year: new FormControl('', [Validators.required]),
    before_lastyear: new FormControl('', [Validators.required]),
    before_last2year: new FormControl('', [Validators.required]),
    before_last3year: new FormControl('', [Validators.required]),
    last_years: new FormControl('', [Validators.required]),
    last2_years: new FormControl('', [Validators.required]),
    last3_years: new FormControl('', [Validators.required]),
    market_lastyear: new FormControl('', [Validators.required]),
    market_last2year: new FormControl('', [Validators.required]),
    market_last3year: new FormControl('', [Validators.required])
  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  nextClick() {
    
    
    this.commonService.thirdPage = 'vhjvhhg';
    this.router.navigate(['/fourth-page']);
  }

  prevClick() {
    this.router.navigate(['/second-page']);
  }

}
