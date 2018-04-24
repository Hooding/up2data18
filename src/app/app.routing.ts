import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DemographicComponent } from './demographic/demographic.component';
import { MapsComponent } from './maps/maps.component';
import { InterestsComponent } from './interests/interests.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { InvolvementComponent } from './involvement/involvement.component';

const routes: Routes =[
  { path: 'map', component: MapsComponent },
    // { path: 'demographic',      component: DemographicComponent },
    // { path: 'interests', component: InterestsComponent },
    // { path: 'satisfaction', component: SatisfactionComponent},
    // { path: 'involvement', component: InvolvementComponent},
      { path: '',          redirectTo: 'demographic', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
