import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, IonicModule, RouterLink],
})
export class AppComponent {
  constructor( public navCtrl : NavController) {}

  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    console.log('sesion cerrada')
  }

}

