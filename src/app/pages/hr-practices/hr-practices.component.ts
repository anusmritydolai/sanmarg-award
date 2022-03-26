import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-hr-practices',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './hr-practices.component.html',
  styleUrls: ['./hr-practices.component.scss'],
})
export class HrPracticesComponent implements OnInit  {
  form: any = new FormGroup({
    directlast_year: new FormControl('', [Validators.required]),
    directlast2_year: new FormControl('', [Validators.required]),
    directlast3_year: new FormControl('', [Validators.required]),
    indirect_lastyear: new FormControl(''),
    indirect_last2year: new FormControl(''),
    indirect_last3year: new FormControl(''),
    total_years: new FormControl('', [Validators.required]),
    total2_years: new FormControl('', [Validators.required]),
    total3_years: new FormControl('', [Validators.required]),
    female: new FormControl('', [Validators.required]),
    hr_paractice: new FormControl('', [Validators.required, Validators.maxLength(200)])
  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getDataObservable.subscribe(data => {
      this.form.patchValue(data);
    })
  }

  nextClick() {
    this.commonService.hrPage = 'vhjvhhg';
    this.router.navigate(['/ev-page']);
  }

  prevClick() {
    this.router.navigate(['/third-page']);
  }
  file_store: FileList | undefined;
  file_store2: FileList | undefined;

  handleFileInputChange(l: any): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'display': `${f.name}${count}`});
    } else {
      this.form.patchValue({'display': ''});
    }
  }
  handleFileInput2Change(l: any): void {
    this.file_store2 = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'display2': `${f.name}${count}`});
    } else {
      this.form.patchValue({'display2': ''});
    }
  }
}
