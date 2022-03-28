import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-crs-initiatives',
  host: { class: 'col align-center' },
  templateUrl: './crs-initiatives.component.html',
  styleUrls: ['./crs-initiatives.component.scss']
})
export class CrsInitiativesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    csr_policy: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    doc_csr_policy: new FormControl(""),
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
    if (this.form.valid) {
      const data: any = this.form.value;
      const x = [
        { name: 'doc_csr_policy', file: this.file_store, fname: data.doc_csr_policy }
      ]
      this.commonService.storeApplication(data, x).subscribe(data => {
        this.router.navigate(['/ird-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

  prevClick() {
    this.router.navigate(['/ev-page']);
  }
  file_store: FileList | undefined;

  handleFileInputChange(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_csr_policy': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_csr_policy': ''});
    }
  }

}
