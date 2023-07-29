import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../@core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'entrepot',
        loadChildren: () =>
        import('./entrepot/entrepot.module').then((m) => m.EntrepotModule),
      },
      {
        path: 'entrepot/creation',
        loadChildren: () =>
        import('./entrepot/entrepot-form/entrepot-form.module').then((m) => m.EntrepotFormModule),
      },
      {
        path: 'entrepot/:entrepotId/edition',
        loadChildren: () =>
        import('./entrepot/entrepot-form/entrepot-form.module').then((m) => m.EntrepotFormModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
