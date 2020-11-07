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

  slideOptPoster = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }



  constructor(private MoviesService: MoviesService,
              private ModalController: ModalController) { }

  ngOnInit() {
    // console.log(this.id);
    this.MoviesService.getPeliculaDestalle(this.id).subscribe(resp => {
      this.pelicula = resp;
    })
    this.MoviesService.getActoresPelicula(this.id).subscribe(resp => {
      this.Actores = resp.cast.filter(actor => actor.profile_path !== null);
    })
  }
  regresar() {
    this.ModalController.dismiss();

  }


}
