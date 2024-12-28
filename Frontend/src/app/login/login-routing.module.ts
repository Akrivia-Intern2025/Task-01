import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class LoginRoutingModule { }
=======
export class LoginRoutingModule { }
>>>>>>> bd93e6385bc15d841913a3a4eb5085d4cd101e4d
