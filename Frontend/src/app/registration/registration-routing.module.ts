import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';


const routes: Routes = [
  {path: '', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class RegistrationRoutingModule { }
=======
export class RegistrationRoutingModule { }
>>>>>>> bd93e6385bc15d841913a3a4eb5085d4cd101e4d
