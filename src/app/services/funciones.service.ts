import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CuentasInterfaces } from '../interfaces/cuentas.interface';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  
  API: string = 'https://localhost:7003';

  
  constructor(private httpClient: HttpClient) { }

  cuentaForm = new FormControl({
    
  }) 

  getHome(): Observable<any> {
    return this.httpClient.get(this.API + "/Home/Registros").pipe(res => res);
  }

 crearCuenta(data: CuentasInterfaces) {
   return this.httpClient.post(this.API + "/Home/singUp", data);
 } 
}
