import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  personajeNuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 15000
  }

  agregarNuevoPersonaje(params: Personaje) {
    this.dbzService.agregarNuevoPersonaje(params)
  }
}