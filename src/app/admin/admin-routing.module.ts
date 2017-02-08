import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ChangepassComponent} from "./changepass/changepass.component";
import {ChangeprofileComponent} from "./changeprofile/changeprofile.component";


const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'changepass',component: ChangepassComponent },
  { path: 'changeprofile', component: ChangeprofileComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouting {
}
