import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'CapitanAmerica'];
  heroeBorrado = '';

  // tslint:disable-next-line: typedef
  BorrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

