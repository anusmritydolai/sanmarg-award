import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog, private commonService: AdminService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) this.commonService.logout();
    });
  }
}
