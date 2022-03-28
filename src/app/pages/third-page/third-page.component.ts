import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonService } from 'src/app/services/common.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form } from 'src/app/interfaces/form';

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
  host: { class: 'col align-center' },
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
    synopsis: new FormControl('', [Validators.required]),
    est_year: new FormControl('', [Validators.required]),
    product_services: new FormControl('', [Validators.required]),
    annual_turnover_2021: new FormControl('', [Validators.required]),
    annual_turnover_2020: new FormControl('', [Validators.required]),
    annual_turnover_2019: new FormControl('', [Validators.required]),
    profit_b_tax_2021: new FormControl('', [Validators.required]),
    profit_b_tax_2020: new FormControl('', [Validators.required]),
    profit_b_tax_2019: new FormControl('', [Validators.required]),
    net_worth_2021: new FormControl('', [Validators.required]),
    net_worth_2020: new FormControl('', [Validators.required]),
    net_worth_2019: new FormControl('', [Validators.required]),
    market_cap_2021: new FormControl('', [Validators.required]),
    market_cap_2020: new FormControl('', [Validators.required]),
    wb_investment: new FormControl('', [Validators.required]),
    doc_annual_report_2021: new FormControl("", [Validators.required]),
    doc_annual_report_2020: new FormControl("", [Validators.required]),
    doc_annual_report_2019: new FormControl("", [Validators.required])
  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getDataObservable.subscribe(data => {
      this.form.patchValue(data);
    })
  }

  nextClick() {
    if (this.form.valid) {
      const data: Form = this.form.value;
      const x = [
        { name: 'doc_annual_report_2021', file: this.file_store, fname: data.doc_annual_report_2021 },
        { name: 'doc_annual_report_2020', file: this.file_store2, fname: data.doc_annual_report_2020 },
        { name: 'doc_annual_report_2019', file: this.file_store3, fname: data.doc_annual_report_2019 },
      ]
      this.commonService.storeApplication(data, x).subscribe(data => {
        this.router.navigate(['/hr-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

  prevClick() {
    this.router.navigate(['/contact-details']);
  }

  file_store: File | undefined;
  file_store2: File | undefined;
  file_store3: File | undefined;

  handleFileInputChange(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_annual_report_2021': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_annual_report_2021': ''});
    }
  }
  handleFileInput2Change(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store2 = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_annual_report_2020': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_annual_report_2020': ''});
    }
  }
  handleFileInput3Change(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store3 = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_annual_report_2019': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_annual_report_2019': ''});
    }
  }
}
