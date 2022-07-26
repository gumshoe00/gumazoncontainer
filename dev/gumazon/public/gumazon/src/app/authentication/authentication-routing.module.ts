import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthenticationGuard} from "./authentication.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        title: 'Login',
        component: LoginComponent
      },
      {
        path: 'profile',
        title: 'Profile',
        component: ProfileComponent,
        canActivate:[AuthenticationGuard]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
