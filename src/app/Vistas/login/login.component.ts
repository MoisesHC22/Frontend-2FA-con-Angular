import { Component, inject, NgModule  } from '@angular/core';
import { CuentasInterfaces } from '../../interfaces/cuentas.interface';
import { FuncionesService } from '../../services/funciones.service';
import { FormsModule, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   qrCode: string | undefined;

   rutas = inject(Router);
   form = inject(FormBuilder);
   httpservice = inject(FuncionesService);

  credenciales = this.form.group({
     correo: ['', [Validators.required]],
     contrasena: [''],
   });

   generarQR(){
     const correo = this.credenciales.value.correo;
     
     if(correo){
     this.httpservice.ObtenerQR(correo).subscribe((data: any)=>{
     if(data && data.qrCode){
       this.qrCode = 'data:image/png;base64,' + data.qrCode;
     }
     else{
      console.error("Error: no se recibio la cadena base64 correctamente");
     }
      });  
     }else {
      console.error('Error: correo no definido');
    }
   }
  
   

     
}
