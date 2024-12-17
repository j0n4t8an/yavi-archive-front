import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { NavbarModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonRoutingModule,
    NavbarModule,
    CardModule,
    BrowserModule
  ]
})
export class CommonModule { }
