import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/user.model';
import { RestService } from '../../../../services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.sass'],
})
export class GestionUsersComponent implements OnInit {
  users: UsuarioModel[] = [];

  constructor(private _rest: RestService) {}

  ngOnInit(): void {
    Swal.fire({
      title: 'Cargando Información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    this._rest.getAllUsers().subscribe(
      (data) => {
        Swal.close();
        this.users = data;
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Intente recargar el sitio o iniciar sesión nuevamente',
        });
      }
    );
  }
}
