import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/Interfaces/interfaces';
import { SearchResponse } from './../Interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { DestalleComponent } from '../components/destalle/destalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  textoBuscar = '';
  ideas: string[] = ['Spiderman','Avenger','Dragon ball','one piece'];
  Peliculas: Pelicula[] = [];
  Buscando = false;

  slideOptPoster = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }
  

  constructor(private MoviesService: MoviesService,
              private ModalController: ModalController) {}

  ngOnInit(): void {}

  onSearchChange(ev){

    const valor: string = ev.detail.value;
    if(valor.length === 0){
      this.Buscando = false;
      this.Peliculas = [];
      return;
    }

    this.Buscando = true;
    this.MoviesService.getbuscarPelicula(valor).subscribe( resp => {
      console.log(resp.results);
      this.Peliculas = resp.results.filter(actor =>actor.poster_path !== null);
      this.Buscando = false;
    });
  }

  async verDestalle(id: string){
    const mondal =  await this.ModalController.create({
      component: DestalleComponent,
      componentProps: {
        id
      }
    });

    mondal.present();

}

}
