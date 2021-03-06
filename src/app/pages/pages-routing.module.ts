import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrsInitiativesComponent } from './crs-initiatives/crs-initiatives.component';
import { EnvironmentComponent } from './environment/environment.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HrPracticesComponent } from './hr-practices/hr-practices.component';
import { InnovationResearchDevelopmentComponent } from './innovation-research-development/innovation-research-development.component';
import { LayoutComponent } from './layout/layout.component';
import { OtherComponent } from './other/other.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'organisation-details' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'organisation-details', component: FirstPageComponent },
      { path: 'contact-details', component: SecondPageComponent },
      { path: 'business-overview', component: ThirdPageComponent },
      { path: 'hr-page', component: HrPracticesComponent },
      { path: 'ev-page', component: EnvironmentComponent },
      { path: 'crs-page', component: CrsInitiativesComponent },
      { path: 'ird-page', component: InnovationResearchDevelopmentComponent },
      { path: 'other-page', component: OtherComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
