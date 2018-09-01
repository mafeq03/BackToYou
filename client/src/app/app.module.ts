import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SessionService } from "./services/session.service";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
