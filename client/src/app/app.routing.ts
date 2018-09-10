import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

export const routes: Routes = [
//Authorization routes
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' },
//Entries route - multiple and single
{
    path:'new-entry',
    component: NewEntryComponent
},
{
    path: 'entries',
    component: AllEntriesComponent

},
{
    path: 'entries/:id',
    component: SingleEntryComponent

},
{
    path: 'delete/:id',
    component: SingleEntryComponent

},
//User Profile Routes
{
    path: 'user/:id',
    component: UserProfileComponent

},
{
    path: 'user/:id',
    component: UserProfileComponent

},



];