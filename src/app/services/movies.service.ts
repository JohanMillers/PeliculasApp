import { MovieReponses } from './../Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = '79279b415e6f8506ed9d11b5eede79ce';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPelicula(){
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?primary_release_date.gte=2020-10-15&primary_release_date.lte=2020-11-02&api_key=${this.apikey}&language=es`);
  }
}
