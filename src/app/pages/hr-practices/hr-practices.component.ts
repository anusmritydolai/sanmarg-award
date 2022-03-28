import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-hr-practices',
  host: { class: 'col align-center' },
  templateUrl: './hr-practices.component.html',
  styleUrls: ['./hr-practices.component.scss'],
})
export class HrPracticesComponent implements OnInit  {
  form: any = new FormGroup({
    direct_employees_2021: new FormControl('', [Validators.required]),
    direct_employees_2020: new FormControl('', [Validators.required]),
    direct_employees_2019: new FormControl('', [Validators.required]),
    indirect_employees_2021: new FormControl(''),
    indirect_employees_2020: new FormControl(''),
    indirect_employees_2019: new FormControl(''),
    total_emp_comp_2021: new FormControl('', [Validators.required]),
    total_emp_comp_2020: new FormControl('', [Validators.required]),
    total_emp_comp_2019: new FormControl('', [Validators.required]),
    female_male_ratio: new FormControl('', [Validators.required]),
    hr_practice: new FormControl('', [Validators.required, Validators.maxLength(200)])
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
        this.router.navigate(['/ev-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
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
