import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/moviesListResponse.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  public movies: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmsService.loading) { return; }

      this.filmsService.getFilms().subscribe(movies => {
        this.movies.push(...movies);
      });
    }


  }




  constructor(private filmsService: FilmsService) {

  }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    })

  }






}
