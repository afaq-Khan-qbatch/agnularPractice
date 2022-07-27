import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { checkActiveAuth } from './lib/guard';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart-routing/cart-routing.module')
      .then(m => m.CartRoutingModule),
  },
  { path: 'desc/:id', component: DashboardComponent },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [checkActiveAuth]
  },
  {
    path: 'dragdrop',
    component: DragDropComponent
  },
  {
    path: 'rxjspractice',
    component: RxjsPracticeComponent
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/charts/chart.module').then(m => m.ChartModule), 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
