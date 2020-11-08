import { Pelicula, Serie } from './../Interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculaReciente: Pelicula[] = [];
  populares: Pelicula[] = []; 
  ninos: Pelicula[] = [];
  Generos: Pelicula[] = [];
  GeneMixtos: Pelicula[] = [];
  SeriesPopulares: Serie[] = [];

  constructor(private movie: MoviesService) {}

  ngOnInit(): void {
    this.movie.getPelicula().subscribe( resp => {
      // console.log(resp.results)
      this.peliculaReciente = resp.results;
    });

    
    

   this.getPopulares();

   this.getNinos();

   this.getGenero();

   this.getGenMixtos()



  }
  
  cargarMas(){
    this.getPopulares()
    this.getGenero()
    this.getNinos()
    this.getGenMixtos()

    
  }

  getPopulares() {
    this.movie.getPopulares().subscribe(populares => {
      this.populares.push(...populares.results);
    });
  }

  getGenero(){
    this.movie.getPeliculaGeneros().subscribe(genero => {
      // this.Actores = resp.cast.filter(actor => actor.profile_path !== null)
      this.Generos.push(...genero.results);
    });
  }

  getNinos(){
    this.movie.getPeliculaNinos().subscribe(nino => {
      this.ninos.push(...nino.results);
    });
  }

  getGenMixtos(){
    this.movie.getPeliGenero().subscribe(resp => {
      console.log(resp.results);
      this.GeneMixtos.push(...resp.results);
    });
  }
  

}
