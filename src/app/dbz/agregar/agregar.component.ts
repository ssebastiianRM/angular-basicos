import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // tslint:disable-next-line: typedef
  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);

    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}
