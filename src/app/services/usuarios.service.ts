import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Usuarios{
  _id: string;
  first_name: string;
  last_name: string;
  username: number;
  email: string;
  image: string;
}

type ApiResponse = { page: number, per_page: number, total: number, total_pages: number, results: Usuarios[]}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient);

  getAll(): Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>('https://peticiones.online/api/users')
    )
  }

}
