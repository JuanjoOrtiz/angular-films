import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
