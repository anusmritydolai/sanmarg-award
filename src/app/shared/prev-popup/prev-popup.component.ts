import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prev-popup',
  templateUrl: './prev-popup.component.html',
  styleUrls: ['./prev-popup.component.scss']
})
export class PrevPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PrevPopupComponent>) { }

  ngOnInit(): void {
  }

}
