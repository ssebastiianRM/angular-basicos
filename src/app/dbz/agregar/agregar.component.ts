import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private dbzService: DbzService){}

  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // tslint:disable-next-line: typedef
  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

}
