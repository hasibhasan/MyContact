import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
