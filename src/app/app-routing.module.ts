import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login/login.component'
import {RegistrationComponent} from './Registration/registration/registration.component'

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'',
    component: RegistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
