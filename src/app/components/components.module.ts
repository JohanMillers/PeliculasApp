import { TituloComponent } from './titulo/titulo.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { PipesModule } from './../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    TituloComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
