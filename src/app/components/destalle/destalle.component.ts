import { DatalocalService } from './../../services/datalocal.service';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from './../../Interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destalle',
  templateUrl: './destalle.component.html',
  styleUrls: ['./destalle.component.scss'],
})
export class DestalleComponent implements OnInit {
  @Input() id;

  public pelicula : PeliculaDetalle = {};
  public Actores : Cast[] = [];
  estrella = 'star-outline';

  slideOptPoster = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }



  constructor(private MoviesService: MoviesService,
              private ModalController: ModalController,
              private datallocal: DatalocalService) { }

   ngOnInit() {
    // console.log(this.id);
    this.datallocal.existePeliculas(this.id)
    .then(existe => this.estrella = (existe) ? 'star' : 'star-outline');
    

    this.MoviesService.getPeliculaDestalle(this.id).subscribe(resp => {
      this.pelicula = resp;
    });


    this.MoviesService.getActoresPelicula(this.id).subscribe(resp => {
      this.Actores = resp.cast.filter(actor => actor.profile_path !== null);
    })
  }
  regresar() {
    this.ModalController.dismiss();
  }

  favorito(){
     const existe = this.datallocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline';
  }




}
