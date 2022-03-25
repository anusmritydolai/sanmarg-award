import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  host: { class: 'col scroll-y' },
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
