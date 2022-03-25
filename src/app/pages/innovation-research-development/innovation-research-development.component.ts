import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-innovation-research-development',
  host: { class: 'col-fill scroll-y' },
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
  }

  nextClick() {
    this.commonService.CrsPage = 'vhjvhhg';
    this.router.navigate(['/other-page']);
  }

  prevClick() {
    this.router.navigate(['/crs-page']);
  }
  file_store: FileList | undefined;

  handleFileInputChange(l: any): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.form.patchValue({'doc_innov_rnd': `${f.name}${count}`});
    } else {
      this.form.patchValue({'doc_innov_rnd': ''});
    }
  }

}
