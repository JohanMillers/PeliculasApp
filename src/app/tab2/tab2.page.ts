import { Pelicula } from 'src/app/Interfaces/interfaces';
import { SearchResponse } from './../Interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  textoBuscar = '';
  ideas: string[] = ['Spiderman','Avenger','Yo ante de ti','Black Phanter'];
  Peliculas: Pelicula[] = [];

  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    
    
  }

  onSearchChange(ev){
    const valor = ev.detail.value;
    this.MoviesService.getbuscarPelicula(valor).subscribe( resp => {
      console.log(resp.results);
      this.Peliculas = resp.results;
    });
  }

}
