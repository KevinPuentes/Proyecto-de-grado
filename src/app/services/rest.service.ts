import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http
      .get(`${environment.urldb}/users.json`)
      .pipe(map(this.crearArregloUser));
  }

  getUser(id: string) {
    return this._http.get(`${environment.urldb}/users/${id}.json`);
  }

  PostUser(user: UsuarioModel) {
    return this._http.post(`${environment.urldb}/users.json`, user).pipe(
      map((resp: any) => {
        user.id_user = resp.name;
        return user;
      })
    );
  }

  PutUser(user: UsuarioModel) {
    const UserTemp = {
      ...user,
    };
    delete UserTemp.id_user;
    return this._http.put(
      `${environment.urldb}/users/${user.id_user}.json`,
      UserTemp
    );
  }

  private crearArregloUser(user: object) {
    const allUsers: UsuarioModel[] = [];
    if (user === null) {
      return [];
    }
    Object.keys(user).forEach((key) => {
      const users: UsuarioModel = user[key];
      users.id_user = key;
      allUsers.push(users);
    });
    return allUsers;
  }
}
