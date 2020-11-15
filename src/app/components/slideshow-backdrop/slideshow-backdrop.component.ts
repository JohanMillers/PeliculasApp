import { DestalleComponent } from './../destalle/destalle.component';
import { Pelicula } from './../../Interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() Peliculas : Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1,
    freeMode: true
};

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDestalle(id: string){
    const mondal =  await this.modalController.create({
      component: DestalleComponent,
      componentProps: {
        id
      }
    });

    mondal.present();

    


  }

}
