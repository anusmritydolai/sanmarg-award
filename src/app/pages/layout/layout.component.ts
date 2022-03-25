import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/users/logout/logout.component';

@Component({
  selector: 'app-layout',
  host: { class: 'col scroll-y' },
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
