import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) { }

  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar() {
    if (this.personajeNuevo.nombre.trim().length !== 0) {
      this.dbzService.agregarNuevoPersonaje(this.personajeNuevo)
      this.personajeNuevo = {
        nombre: '',
        poder: 0
      }
    }
  }
}
