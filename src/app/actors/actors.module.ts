import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';


@NgModule({
  declarations: [
    ActorsPageComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ],
  exports:[ActorsPageComponent]
})
export class ActorsModule { }
