import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonCardHeader, IonItem, IonCardTitle, IonCardContent, IonCard, IonFooter, IonInput, IonLabel, NavController } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, IonFooter, IonCard, IonCardContent, IonCardTitle, IonItem, IonCardHeader, IonButtons, IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl("",Validators.required),
      'confirmacionPassword' : new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Debes llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('main');
  }

}
