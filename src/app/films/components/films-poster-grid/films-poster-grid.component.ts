import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/moviesListResponse.interface'


@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.scss']
})
export class FilmsPosterGridComponent {

  @Input() movies: Movie[] = [];

  private router = inject(Router);

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);


  }

}
