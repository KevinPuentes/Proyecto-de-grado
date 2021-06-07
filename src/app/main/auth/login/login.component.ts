import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/login.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private _auth : AuthService, private router: Router) { }

  ngOnInit(): void {
    if( localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(form : NgForm){
    if(form.invalid ){ return; }
    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this._auth.login(this.usuario).subscribe( res => {
        if( this.recordarme){
          localStorage.setItem('email', this.usuario.email);
        }
        setTimeout(() => {
          Swal.close();
          this.router.navigateByUrl('/temp/inicio');
        }, 500);
    }, (err) =>{
      Swal.fire({
        title: 'Error al autenticar',
        icon: 'error',
        text: err.error.error.message,
      });
    });
  }
}
