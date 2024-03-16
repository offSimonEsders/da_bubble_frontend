import { Routes } from '@angular/router';
import { LoginComponent } from './user-access/login/login.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { RegisterComponent } from './user-access/register/register.component';

export const routes: Routes = [
    {path: '', component: UserAccessComponent, children: [
        {path: '', component: LoginComponent},
        {path: 'register', component: RegisterComponent}
    ]}
];
