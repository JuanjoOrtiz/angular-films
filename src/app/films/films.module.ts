import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { PosterPipe } from './pipes/poster.pipe';


@NgModule({
  declarations: [
    SlideshowComponent,
    FilmsPageComponent,
    PosterPipe
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
