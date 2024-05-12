import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonTabButton, IonButton, IonFooter, IonButtons, NavController } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterLink, IonButtons, IonFooter, IonButton, IonTabButton, IonCardContent, IonCardHeader, IonCard, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonCardTitle]
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController ) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })

   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    // var usuario = JSON.parse(localStorage.getItem('usuario'));
    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('main');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos ingresados no son válidos',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }  
  
  }
  }
