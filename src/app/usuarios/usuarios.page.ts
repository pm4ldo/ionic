import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent } from '@ionic/angular/standalone';
import { IonMenu, IonMenuButton, IonicModule } from '@ionic/angular';
import { Usuarios, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class UsuariosPage implements OnInit {

  usuarios: Usuarios[] = [];

  usuariosService = inject(UsuariosService);

  async ngOnInit() {
    const response = await this.usuariosService.getAll();
    this.usuarios = response.results;
  }

}
