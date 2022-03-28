import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-environment',
  host: { class: 'col align-center' },
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {
  form: FormGroup = new FormGroup({
    renewable_energy_expense: new FormControl('', [Validators.required]),
    env_hazard_renewable_energy: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    doc_env_supporting: new FormControl("", [Validators.required]),
    display2: new FormControl("")
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
        { name: 'doc_env_supporting', file: this.file_store, fname: data.doc_env_supporting },
        { name: 'display2', file: this.file_store2, fname: data.display2 }
      ]
      this.commonService.storeApplication(data, x).subscribe(data => {
        this.router.navigate(['/crs-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

  prevClick() {
    this.router.navigate(['/hr-page']);
  }
  file_store: FileList | undefined;
  file_store2: FileList | undefined;

  handleFileInputChange(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_env_supporting': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_env_supporting': ''});
    }
  }

  handleFileInput2Change(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store2 = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'display2': `${f.name}${count}`});
    } else {
      this.form.patchValue({'display2': ''});
    }
  }


}
