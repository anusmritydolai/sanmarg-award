import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { PagesRoutingModule } from './pages-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LastPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatCardModule, MatInputModule, MatSelectModule, MatDatepickerModule
    
  ]
})
export class PagesModule { }
