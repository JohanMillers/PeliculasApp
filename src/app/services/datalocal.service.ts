import { PeliculaDetalle } from './../Interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  Peliculas: PeliculaDetalle[] = [];


  constructor(private storage: Storage) { }

  guardarPelicula(pelicula : PeliculaDetalle){
    
    this.Peliculas.push(pelicula);
    this.storage.set('pelicula', this.Peliculas);
  }

}
