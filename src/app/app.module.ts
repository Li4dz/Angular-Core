import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./security";
import { SweetAlert } from './common/sweet-alert/sweet-alert';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard, SweetAlert, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
