import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/auth/login/login.component';
import { CreateUsersComponent } from './main/pages/create/create-users/create-users.component';
import { GestionUsersComponent } from './main/pages/gestion/gestion-users/gestion-users.component';
import { HeaderComponent } from './main/components/header/header.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { MapaComponent } from './main/pages/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUsersComponent,
    GestionUsersComponent,
    HeaderComponent,
    DashboardComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
