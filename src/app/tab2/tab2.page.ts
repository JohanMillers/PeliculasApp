import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] = ['Spiderman','Avenger','Yo ante de ti','Black Phanter'];

  constructor() {}

  onSearchChange(ev){
    const valor = ev.detail.value;
    console.log(valor);
  }

}
