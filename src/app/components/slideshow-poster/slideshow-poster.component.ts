import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Pelicula } from 'src/app/Interfaces/interfaces';

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
  constructor() {}

  ngOnInit() {
  }

  onClick(){
    console.log('cargas mas....')
    this.cargarMas.emit();
  }



  



}
