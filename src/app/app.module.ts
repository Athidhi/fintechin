import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsurancehomepageComponent } from './insurancehomepage/insurancehomepage.component';
import { InsurancestatusComponent } from './insurancestatus/insurancestatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsurancehomepageComponent,
    InsurancestatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
