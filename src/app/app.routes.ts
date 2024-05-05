import { Routes } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component';
import { SignUpComponent } from './Vistas/sign-up/sign-up.component';
import { HomeComponent } from './Vistas/home/home.component';

export const routes: Routes = [
    {path: 'Login', component: LoginComponent },
    {path: 'Sing-Up', component: SignUpComponent},
    {path: 'Home', component: HomeComponent}
];
