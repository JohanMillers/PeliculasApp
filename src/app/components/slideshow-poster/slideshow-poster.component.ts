import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/Interfaces/interfaces';
import { DestalleComponent } from '../destalle/destalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() Peliculas : Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();
  @ViewChild(IonSlides) ionicSlides: IonSlides;

  

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
};
  constructor(private ModalController: ModalController) {}

  ngOnInit() {}

  onClick(){
    console.log('cargas mas....')
    this.cargarMas.emit();
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
