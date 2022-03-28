import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-innovation-research-development',
  host: { class: 'col align-center' },
  templateUrl: './innovation-research-development.component.html',
  styleUrls: ['./innovation-research-development.component.scss']
})
export class InnovationResearchDevelopmentComponent implements OnInit {
  form: FormGroup = new FormGroup({
    innov_rnd_impact: new FormControl('', [Validators.maxLength(200)]),
    doc_innov_rnd: new FormControl(""),
    annual_innov_rnd_expense: new FormControl("", [Validators.required]),
    
  
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
        { name: 'doc_innov_rnd', file: this.file_store, fname: data.doc_innov_rnd }
      ]
      this.commonService.storeApplication(data, x).subscribe(data => {
        this.router.navigate(['/other-page']);
      })
    } else { this.form.markAllAsTouched(); this.commonService.openSnackBar('Please correct the form'); }
  }

  prevClick() {
    this.router.navigate(['/crs-page']);
  }
  file_store: FileList | undefined;

  handleFileInputChange(l: any): void {
    if (l.length) {
      const f = l[0];
      this.file_store = f;
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_innov_rnd': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_innov_rnd': ''});
    }
  }

}
