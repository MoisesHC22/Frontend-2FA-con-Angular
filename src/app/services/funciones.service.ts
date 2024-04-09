import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CuentasInterfaces } from '../interfaces/cuentas.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  
  API_Registros: string = 'https://localhost:7003/Home/Registros';
  API_Crear: string = 'https://localhost:7003/Home/Crear';
  
  constructor(private httpClient: HttpClient) { }

  getHome(): Observable<any> {
    return this.httpClient.get(this.API_Registros).pipe(res => res);
  }

 crearCuenta(data: CuentasInterfaces): Observable<any> {
   return this.httpClient.post(this.API_Crear, data).pipe();
 } 

}
