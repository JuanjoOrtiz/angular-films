import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { FilmsResponse, Movie } from '../interfaces/films-response';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private baseUrl: string = environment.base_uri;
  private access_token= environment.access_token;
  private page = 1;
  public loading: boolean = false;

  private http = inject(HttpClient);

  resetFilmsPage() {
  }

  get params() {
    return {

      language: 'es-ES',
      page: this.page.toString()
    }
  }


  getFilms(): Observable<Movie[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.access_token}`,
    });

    let params = this.params

    if (this.loading) {
      return of([]);
    }

    this.loading = false;

    return this.http
      .get<FilmsResponse>(`${this.baseUrl}/movie/now_playing`, {
        headers,
        params

      })
      .pipe(
        map((resp) => resp.results
      ),
        tap(() => {
          this.page += 1;
          this.loading = false;

        })
      );
  }
}
