import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UsuarioModel } from 'src/app/models/user.model';
import { RestService } from '../../../../services/rest.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.sass'],
})
export class CreateUsersComponent implements OnInit {
  user: UsuarioModel = new UsuarioModel();
  id = null;

  constructor(
    private _rest: RestService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id != 'nuevo') {
      this._rest.getUser(this.id).subscribe((res: UsuarioModel) => {
        this.user = res;
        this.user.id_user = this.id;
      });
    }
    if (this.id == 'nuevo') this.user.id_user = null;
  }

  createUser(form: NgForm) {
    if (form.invalid) return;
    Swal.fire({
      title: 'Espere',
      icon: 'info',
      text: 'Guardando información',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    peticion = this.user.id_user
      ? this._rest.PutUser(this.user)
      : this._rest.PostUser(this.user);

    peticion.subscribe((resp) => {
      Swal.fire({
        title: this.user.name + ' ' + this.user.surname,
        icon: 'success',
        text: 'Se actualizo correctamente',
      });
      this._router.navigateByUrl('/usuarios');
    });
  }
}
