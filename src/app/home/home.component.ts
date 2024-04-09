import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CuentasInterfaces } from '../interfaces/cuentas.interface';
import { FuncionesService } from '../services/funciones.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
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
      error: (err) =>{
        console.log(err);
      }
    })
  }

}
