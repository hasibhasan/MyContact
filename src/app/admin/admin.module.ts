import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminRouting} from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule,AdminRouting
  ],
  declarations: [ChangepassComponent, ChangeprofileComponent, DashboardComponent],
  exports:[AdminRouting]
})
export class AdminModule { }
