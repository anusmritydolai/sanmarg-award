import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';

@Component({
  selector: 'app-layout',
  host: { class: 'col scroll-y' },
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public dialog: MatDialog, private commonService: CommonService) {}

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) this.commonService.logout();
    });
  }
}
