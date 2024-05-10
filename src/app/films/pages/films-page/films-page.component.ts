import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/films-response';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrl: './films-page.component.css',
})
export class FilmsPageComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  filmsService = inject(FilmsService);
   ngOnInit(): void {
    this.filmsService.getFilms()
    .subscribe(movies=> {
      this.movies=movies;
      console.log(this.movies);
      this.moviesSlideShow = movies;
      console.log(this.moviesSlideShow);
   });
  }
}
