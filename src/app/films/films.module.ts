import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';

import { FilmsPosterGridComponent } from './components/films-poster-grid/films-poster-grid.component';
import { FilmsLayoutComponent } from './layouts/films-layout/films-layout.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

import { PosterPipe } from './pipes/poster.pipe';
import { StarratingService } from './services/starrating.service';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';


@NgModule({
  declarations: [
    FilmsPosterGridComponent,
    FilmsLayoutComponent,
    FilmsListComponent,
    PosterPipe,
    FilmDetailsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    StarRatingModule.forRoot()
  ],
  exports: [PosterPipe],
  providers: [
    { provide: StarRatingConfigService, useClass: StarratingService }
  ]
})
export class FilmsModule { }
