import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
// import { FileSelectDirective } from "ng2-file-upload";

import { SessionService } from "./services/session.service";
import { EntryService } from "./services/entry.service";
import { UserService } from "./services/user.service";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NewEntryComponent,
    AllEntriesComponent,
    ActivitiesComponent,
    EmotionsComponent,
    UserProfileComponent,
    SingleEntryComponent,
    // FileSelectDirective,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [ 
    SessionService,
    EntryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }