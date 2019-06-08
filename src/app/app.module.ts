import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { FindComponent } from './find/find.component';
import { GridComponent } from './grid/grid.component';
import { TrackComponent } from './track/track.component';
import { ReqtemplateComponent } from './reqtemplate/reqtemplate.component';
import { RestemplateComponent } from './restemplate/restemplate.component';
import { OrderchartComponent } from './orderchart/orderchart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent,
    GridComponent,
    TrackComponent,
    ReqtemplateComponent,
    RestemplateComponent,
    OrderchartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
    ]),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    TrackComponent,
    ReqtemplateComponent,
    RestemplateComponent
  ]
})
export class AppModule { }
