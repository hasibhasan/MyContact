import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChangepassComponent, ChangeprofileComponent, DashboardComponent]
})
export class AdminModule { }
