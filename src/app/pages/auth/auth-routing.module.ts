import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckDeactivteServise } from 'src/app/lib/guard';

const routes: Routes = [
  {
    path: 'signin',
    // loadComponent: async () => (await import('./sign-in/sign-in.component')).SignInComponent,
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
    // loadComponent: async () => (await import('./sign-up/sign-up.component')).SignUpComponent,
    canDeactivate: [CheckDeactivteServise]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
