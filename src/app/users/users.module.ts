import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule, MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule, ReactiveFormsModule, MatFormFieldModule,
    MatCardModule, MatInputModule,
    MatIconModule
  ]
})
export class UsersModule { }
