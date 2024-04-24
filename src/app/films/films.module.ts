import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';


@NgModule({
  declarations: [
    SlideshowComponent,
    FilmsPageComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  exports:[
   FilmsPageComponent
  ]
})
export class FilmsModule { }
