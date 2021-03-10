import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];

  // tslint:disable-next-line: typedef
  get personajes(){
    return this.DbzService.personajes;
  }

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DbzService: DbzService){}
}
