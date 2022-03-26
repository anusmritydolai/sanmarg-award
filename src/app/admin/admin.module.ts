import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutModule } from '../shared/logout/logout.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatSnackBarModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatDialogModule,
    MatButtonModule, MatIconModule,
    LogoutModule
  ]
})
export class AdminModule { }
