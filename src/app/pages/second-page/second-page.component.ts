import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-second-page',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  form: any = new FormGroup({
    contact_name: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    mobile_no: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),

  });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  nextClick() {
    this.commonService.secondPage = 'vhjvhhg';
    this.router.navigate(['/third-page']);
  }

  prevClick() {
    this.router.navigate(['/first-page']);
  }

}
