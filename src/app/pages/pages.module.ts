import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { PagesRoutingModule } from './pages-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HrPracticesComponent } from './hr-practices/hr-practices.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CrsInitiativesComponent } from './crs-initiatives/crs-initiatives.component';
import { InnovationResearchDevelopmentComponent } from './innovation-research-development/innovation-research-development.component';
import { OtherComponent } from './other/other.component';
import { LayoutComponent } from './layout/layout.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { LogoutModule } from '../shared/logout/logout.module';
import { PrevPopupModule } from '../shared/prev-popup/prev-popup.module';
// import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    HrPracticesComponent,
    EnvironmentComponent,
    CrsInitiativesComponent,
    InnovationResearchDevelopmentComponent,
    OtherComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule, MatIconModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatCardModule, MatInputModule, MatSelectModule, MatDatepickerModule,
    NgxMaskModule.forRoot(),
    LogoutModule, PrevPopupModule
  ]
})
export class PagesModule { }
