import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    // tslint:disable-next-line: variable-name
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder:	7500
        }
    ];
    // tslint:disable-next-line: typedef
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){}
    // tslint:disable-next-line: typedef
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}
