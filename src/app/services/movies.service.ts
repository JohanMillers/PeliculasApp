import { MovieReponses, PeliculaDetalle, RespuestaCredits, SearchResponse, SerieReponses } from './../Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = '79279b415e6f8506ed9d11b5eede79ce';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private popuralesPages = 0;

 


  constructor(private http: HttpClient) { }

  getPopulares(){
    this.popuralesPages++;
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&page=${this.popuralesPages}`)
  }

  getPelicula(){

    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString: any;

    if (mes < 10) {
      mesString = '0' + mes;
    }else {
      mesString = mes;
    }
    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?primary_release_date.gte=2020-10-15&primary_release_date.lte=${fin}&api_key=${this.apikey}&language=es`);
  }
// petinciones de destalles de la peliculas 
  getPeliculaDestalle(id: string) {
    return this.http.get<PeliculaDetalle>(`${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`);
    
  }
  // getserieDestalle(id: string) {
  //   return this.http.get<SerieReponses>(`${this.urlMoviedb}/tv/${id}?api_key=${this.apikey}&language=es`);
    
  // }
  // petinciones de destalles de la peliculas 

//  Peticion para los actores 
  getActoresPelicula(id: string){
    return this.http.get<RespuestaCredits>(`${this.urlMoviedb}/movie/${id}/credits?api_key=${this.apikey}&language=es`);
  }
  //  Peticion para los actores 

  getbuscarPelicula(termino: string){
    return this.http.get<SearchResponse>(`${this.urlMoviedb}/search/movie?query=${termino}&api_key=${this.apikey}&include_adult=false`);

  }
  getPeliculaNinos(){
    this.popuralesPages++;
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&page=${this.popuralesPages}`);
    
  }
  getPeliculaGeneros(){
    this.popuralesPages++;
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?with_genres=16&sort_by=vote_average.desc&vote_count.gte=10&api_key=${this.apikey}&language=es&page=${this.popuralesPages}`);
  }
  getPeliGenero(){
    this.popuralesPages++;
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/discover/movie?with_genres=28&874&sort_by=vote_average.desc&vote_count.gte=10&api_key=${this.apikey}&language=es&page=${this.popuralesPages}`);
  }

  getPeliculaTop_Raking(){
    this.popuralesPages++;
    return this.http.get<MovieReponses>(`${this.urlMoviedb}/movie/top_rated?api_key=${this.apikey}&language=es&page=${this.popuralesPages}`);
  }


}
