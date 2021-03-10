import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // tslint:disable-next-line: typedef
  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

}
