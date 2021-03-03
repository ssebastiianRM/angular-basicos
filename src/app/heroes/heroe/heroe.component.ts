import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre = 'IronMan';
    edad = 45;

    // tslint:disable-next-line: typedef
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 20;
    }
}
