import { Component, OnInit, inject } from '@angular/core';
import {error} from 'console';
import { CuentasInterfaces } from '../../interfaces/cuentas.interface';
import { FuncionesService } from '../../services/funciones.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //Función para ver los registros

  CuentasList: CuentasInterfaces[]=[];

  constructor(private Funciones: FuncionesService){}

  ngOnInit(): void {
    this.getHome()
  }

  getHome(){
    this.Funciones.getHome().subscribe({
      next: (result) => {
        this.CuentasList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



  //Función de Eliminar

  form = inject(FormBuilder);
  httpserver = inject(FuncionesService);

  formulario = this.form.group({
    idCuenta: [0, [Validators.required]],
    nombre: [''],
    contrasena: [''],
    correo: [''],
    secretcode: ['']
  });

  eliminar(idCuenta: number | undefined){
    if (idCuenta !== undefined){
    const data: CuentasInterfaces = {
      idCuenta: idCuenta,
      nombre: this.formulario.value.nombre!,
      contrasena: this.formulario.value.contrasena!,
      correo: this.formulario.value.correo!,
      secretCode: this.formulario.value.secretcode
    };
    this.httpserver.Eliminar(data).subscribe(()=>{
      console.log("success");

      this.getHome();
    });
    } else {
      console.log("idCuenta es undefined");
    }
    
  }
}
