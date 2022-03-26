import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    female: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    display: new FormControl("", [Validators.required]),
    display2: new FormControl("", [Validators.required])
  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getDataObservable.subscribe(data => {
      this.form.patchValue(data);
    })
  }

  nextClick() {
    this.commonService.evPage = 'vhjvhhg';
    this.router.navigate(['/crs-page']);
  }

  prevClick() {
    this.router.navigate(['/hr-page']);
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
