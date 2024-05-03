import { Component, inject } from '@angular/core';
import { FuncionesService } from '../../services/funciones.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CuentasInterfaces } from '../../interfaces/cuentas.interface';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  form = inject(FormBuilder);
  httpservice = inject(FuncionesService);

  formulario = this.form.group({
    nombre: ['', [Validators.required]],
    contrasena: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    secretcode: ['']
  });

  guardar(){
    console.log(this.formulario.value);
    const data: CuentasInterfaces = {
      nombre: this.formulario.value.nombre!,
      contrasena: this.formulario.value.contrasena!,
      correo: this.formulario.value.correo!,
      secretCode: this.formulario.value.secretcode
    };

    this.httpservice.crearCuenta(data).subscribe(()=>{
       console.log("success");
    });
  }
}
