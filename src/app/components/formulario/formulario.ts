import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  emailForm = 'tuEmail@email.com';
  nombreForm = 'tuNombre';
  apellidosForm = 'tuApellido';
  nifForm = 'tuNif';
  telefonoForm = 'tuTelefono';
  sexoForm = 'tuSexo';
  contraseniaForm = '';
  confirmarcontraseniaForm = '';


  sendForm() {
    console.log(this.emailForm);
    console.log(this.nombreForm);
    console.log(this.apellidosForm);
    console.log(this.nifForm);
    console.log(this.telefonoForm);
    console.log(this.sexoForm);
    console.log(this.contraseniaForm);
    console.log(this.confirmarcontraseniaForm);
  }

}
