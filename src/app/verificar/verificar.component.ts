import { Component, OnInit, inject } from '@angular/core';
import { FuncionesService } from '../services/funciones.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [],
  templateUrl: './verificar.component.html',
  styleUrl: './verificar.component.css'
})
export class VerificarComponent implements OnInit{
  form!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private Funciones: FuncionesService){}

  crearCuenta(){
    this.Funciones.crearCuenta(this.form.value).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    });
  }
}
