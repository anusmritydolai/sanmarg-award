import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private commonService: CommonService,
    public dialogRef: MatDialogRef<LogoutComponent>,
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.commonService.logout(this.dialogRef);
  }
}
