import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destalle',
  templateUrl: './destalle.component.html',
  styleUrls: ['./destalle.component.scss'],
})
export class DestalleComponent implements OnInit {
  @Input() id;

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {
    // console.log(this.id);
    this.MoviesService.getPeliculaDestalle(this.id).subscribe(resp => {
      console.log(resp);
    })
    this.MoviesService.getActoresPelicula(this.id).subscribe(resp => {
      console.log(resp.cast);
    })
  }


}
