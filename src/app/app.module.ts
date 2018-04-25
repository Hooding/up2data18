import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import { DemographicComponent } from './demographic/demographic.component';
import { MapsComponent } from './maps/maps.component';
import { InterestsComponent } from './interests/interests.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { InvolvementComponent } from './involvement/involvement.component';
import { BarChartComponent } from './d3/visuals/bar-chart/bar-chart.component';
import { WordCloudComponent } from './d3/visuals/word-cloud/word-cloud.component';
import { BulletChartComponent } from './d3/visuals/bullet-chart/bullet-chart.component';
import { BarVisualComponent } from './d3/visuals/shared/bar-visual/bar-visual.component';
import { SHARED_VISUALS } from './d3/visuals/shared';
import { D3Service } from './d3';
import { PieChartComponent } from './d3/visuals/pie-chart/pie-chart.component';
import { SliceVisualComponent } from './d3/visuals/shared/slice-visual/slice-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    DemographicComponent,
    MapsComponent,
    InterestsComponent,
    SatisfactionComponent,
    InvolvementComponent,
    BarChartComponent,
    WordCloudComponent,
    BulletChartComponent,
    BarVisualComponent,
    ...SHARED_VISUALS,
    PieChartComponent,
    SliceVisualComponent,
    // ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAC1r63zvq8QbhkrqF6uJ-d7yWYHQ_Du6k'
    })
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
