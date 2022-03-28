import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevPopupComponent } from './prev-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PrevPopupComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    PrevPopupComponent
  ]
})
export class PrevPopupModule { }
