import { Pelicula } from './../../Interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() Peliculas : Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
};

  constructor() { }

  ngOnInit() {}

}
