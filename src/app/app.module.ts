import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import {HeaderComponent} from "./header/header.component";
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
