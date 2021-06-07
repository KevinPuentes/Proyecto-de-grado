import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLoginModel } from '../models/login.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  user_token: string;

  constructor(private _http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioLoginModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this._http
      .post(
        `${this.url}signInWithPassword?key=${environment.GoogleKey}`,
        authData
      )
      .pipe(
        map((res) => {
          this.guardarToken(res['idToken']);
          return res;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.user_token = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  private leerToken() {
    if (localStorage.getItem('token')) {
      this.user_token = localStorage.getItem('token');
    } else {
      this.user_token = '';
    }
    return this.user_token;
  }

  estaAutenticado(): boolean {
    if (this.user_token.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
