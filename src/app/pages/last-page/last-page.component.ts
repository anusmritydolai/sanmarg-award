import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }
  nextClick() {
    this.commonService.lastPageSubmit('fghdghd').subscribe(data => {
      console.log(data);
      this.router.navigate(['/first-page']);
      
    })
  }
  
  prevClick() {
    this.router.navigate(['/third-page']);
  }
}
