import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./security";
import { SweetAlert } from './common/sweet-alert/sweet-alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard, SweetAlert ],
  bootstrap: [AppComponent]
})
export class AppModule { }
