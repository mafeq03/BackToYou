import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' }
];