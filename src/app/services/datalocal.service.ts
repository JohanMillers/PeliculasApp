import { PeliculaDetalle } from './../Interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  Peliculas: PeliculaDetalle[] = [];


  constructor(private storage: Storage,
              private toastCtrl: ToastController) { 

                this.cargarFavoritos();
                
              }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarPelicula(pelicula : PeliculaDetalle){

    let existe = false;
    let mensaje = '';

    for (const peli of this.Peliculas){
      if (peli.id === pelicula.id){
        existe = true;
        break;
      }
    }

    if (existe) {
      this.Peliculas = this.Peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    }else {
      this.Peliculas.push(pelicula);
      mensaje = 'Agredada a favoritos';
    }


    this.presentToast(mensaje);
    this.storage.set('peliculas', this.Peliculas);

    return !existe;
  }

   async cargarFavoritos(){
     const peliculas = await this.storage.get('peliculas');
     this.Peliculas = peliculas || [];
     return this.Peliculas;
  }

  async existePeliculas(id){

    await this.cargarFavoritos();
    const existe = this.Peliculas.find(peli => peli.id === id);

     return (existe) ? true : false;

  }

}
