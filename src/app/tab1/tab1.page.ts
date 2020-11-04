import { Pelicula } from './../Interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculaReciente: Pelicula[] = [];
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
}

  
  constructor(private movie: MoviesService) {}

  


  ngOnInit(): void {
    this.movie.getPelicula().subscribe( resp => {
      console.log(resp.results)
      this.peliculaReciente = resp.results;
    });
  }
  

}
