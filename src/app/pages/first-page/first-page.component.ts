import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-first-page',
  host: { class: 'col-fill scroll-y' },
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
    form: any = new FormGroup({
      company_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      sector: new FormControl('', [Validators.required]),
      company_address: new FormControl('', [Validators.required]),
      company_address_2: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      company_website: new FormControl('', [Validators.required]),
      facebook_page: new FormControl(''),
      linkedin_page: new FormControl('', [Validators.required]),
      cin_no: new FormControl(''),
      gst_no: new FormControl('', [Validators.required]),
    });
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {


  }

  nextClick() {
    this.commonService.firstPage = 'hgfgfg';
    this.router.navigate(['/second-page']);
  }

}
