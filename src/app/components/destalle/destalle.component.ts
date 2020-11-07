import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destalle',
  templateUrl: './destalle.component.html',
  styleUrls: ['./destalle.component.scss'],
})
export class DestalleComponent implements OnInit {
  @Input() id;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
