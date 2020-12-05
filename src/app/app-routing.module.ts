import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InsurancehomepageComponent } from './insurancehomepage/insurancehomepage.component';
import { InsurancestatusComponent } from './insurancestatus/insurancestatus.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'insurancehomepage', component: InsurancehomepageComponent },
  { path: 'insurancestatus', component: InsurancestatusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
