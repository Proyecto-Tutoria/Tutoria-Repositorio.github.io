import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  mostrarModalCrearCuenta = false;

  abrirModal() {
    this.mostrarModalCrearCuenta = true;
  }

  cerrarModal() {
    this.mostrarModalCrearCuenta = false;
  }
}