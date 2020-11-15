import { DatalocalService } from './../services/datalocal.service';
import { PeliculaDetalle } from './../Interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  favoritos: PeliculaDetalle[] = [];

  constructor( private DataLocal : DatalocalService) {}

  async ngOnInit(): Promise<void> {
    this.favoritos = await this.DataLocal.cargarFavoritos();
    
  }

}
