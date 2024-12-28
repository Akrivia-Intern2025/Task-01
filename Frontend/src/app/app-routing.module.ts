import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup',loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> bd93e6385bc15d841913a3a4eb5085d4cd101e4d
