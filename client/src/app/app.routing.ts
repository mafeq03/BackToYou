import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' }
];