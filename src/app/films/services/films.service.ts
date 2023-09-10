import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movie, MoviesListResponse } from '../interfaces/moviesListResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  private baseURL = environment.baseURI;
  private filmsPage = 1;
  public loading: boolean = false;

  private http = inject(HttpClient);


  get Params() {
    return {
      api_key: environment.apiKey,
      language: 'es-Es',
      page: this.filmsPage.toString()
    }
  }


  getFilms(): Observable<Movie[]> {

    if (this.loading) {
      return of([]);
    }
    this.loading = true;
    return this.http.get<MoviesListResponse>(`${this.baseURL}/movie/now_playing`, {
      params: this.Params
    })
      .pipe(map((response) => response.results),
        tap(() => {
          this.filmsPage += 1;
          this.loading = false;
        })

      )

  }






  reserFilmsPage() {
    this.filmsPage = 1;
  }


}
