import { Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

export const routes: Routes = [
  
  { path: '', loadComponent: ()=> import('./login/login.page').then(m => m.LoginPage), canActivate: [IngresadoGuard] },

  { path: 'main', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage), canActivate : [IngresadoGuard] },
 
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage), canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage), canActivate: [NoIngresadoGuard]
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage), canActivate: [IngresadoGuard]
  }
];
