import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './Vistas/home/home.component';
import { LoginComponent } from './Vistas/login/login.component';
import { SignUpComponent } from './Vistas/sign-up/sign-up.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, LoginComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FrontEnd2FA';
}



