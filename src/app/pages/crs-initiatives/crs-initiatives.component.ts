import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-crs-initiatives',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './crs-initiatives.component.html',
  styleUrls: ['./crs-initiatives.component.scss']
})
export class CrsInitiativesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    csr_policy: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    doc_csr_policy: new FormControl(""),
    display2: new FormControl("", [Validators.required]),
    annual_csr_expense: new FormControl('', [Validators.required]),
    perc_profit_csr: new FormControl('', [Validators.required]),
  
  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getDataObservable.subscribe(data => {
      this.form.patchValue(data);
    })
  }

  nextClick() {
    this.commonService.CrsPage = 'vhjvhhg';
    this.router.navigate(['/ird-page']);
  }

  prevClick() {
    this.router.navigate(['/ev-page']);
  }
  file_store: FileList | undefined;
  file_store2: FileList | undefined;

  handleFileInputChange(l: any): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_csr_policy': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_csr_policy': ''});
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
