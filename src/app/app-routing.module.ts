import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './main/auth/login/login.component';
import { CreateUsersComponent } from './main/pages/create/create-users/create-users.component';
import { GestionUsersComponent } from './main/pages/gestion/gestion-users/gestion-users.component';
import { HomeComponent } from './main/pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomeComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'usuarios', component: GestionUsersComponent
  },
  {
    path: 'usuarios/:id', component: CreateUsersComponent
  },
  {
    path: '**', redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
