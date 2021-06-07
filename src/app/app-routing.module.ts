import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './main/auth/login/login.component';
import { HomeComponent } from './main/pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomeComponent, canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
