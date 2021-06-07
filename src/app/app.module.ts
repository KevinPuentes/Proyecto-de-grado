import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/auth/login/login.component';
import { CreateUsersComponent } from './main/pages/create/create-users/create-users.component';
import { GestionUsersComponent } from './main/pages/gestion/gestion-users/gestion-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUsersComponent,
    GestionUsersComponent
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
